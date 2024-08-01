import type { GetMembersDataType }                       from './get-members-data.interfaces.js'
/* eslint-disable @typescript-eslint/naming-convention */
import type { GetViewerAllOrganizationsAllMembersQuery } from '@globals/data'
import type { OrganizationMemberDataType }               from '@globals/data'
import type { OrganizationDataType }                     from '@globals/data'

import { getMembersWithout2fa }                          from '@globals/third-party'

import { GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS }      from '@globals/data'
import { requestOctokitGraphqlData }                     from '@globals/data'

import { checkMembersOnbordingConditions }               from './check-members-onbording-conditions.hook.js'
import { getUniqueItems }                                from './helpers/index.js'
import { linkMemberToOrganizations }                     from './helpers/index.js'

export const getMembersData: GetMembersDataType = async ({
  toast,
  setMembersData,
  setOrganizationsData,
  organizationsLimit,
  organizationMembersLimit,
}) => {
  try {
    const response = (await requestOctokitGraphqlData(
      document,
      GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS,
      {
        organizationsLimit,
        organizationMembersLimit,
      }
    )) as GetViewerAllOrganizationsAllMembersQuery

    const organizationsData_response = response.viewer.organizations.nodes
    if (!organizationsData_response?.length) return

    const membersData_all: Array<OrganizationMemberDataType> = []
    const organizationsData_all: Array<OrganizationDataType> = []
    const memberOrganizations: Record<string, Array<string>> = {}

    const defaultOrganizationName = process.env.NEXT_PUBLIC_GITHUB_ORG_NAME as string
    const membersWithou2fa = await getMembersWithout2fa(document)
    const membersInDefaultOrganization: Array<string> = []

    for (const organizationData of organizationsData_response) {
      if (organizationData) {
        const {
          membersWithRole: { nodes: organizationMembers },
        } = organizationData

        if (organizationMembers) {
          for (const { id: memberId } of organizationMembers as any) {
            if (organizationData.name === defaultOrganizationName) {
              membersInDefaultOrganization.push(memberId)
            }
          }

          const {
            membersWithRole: { nodes: membersData_organization },
          } = organizationData

          if (membersData_organization) {
            for (const memberData of membersData_organization) {
              if (memberData) {
                const memberId = memberData.id
                const { id: organizationId } = organizationData

                if (!memberOrganizations[memberId]) {
                  memberOrganizations[memberId] = []
                }

                memberOrganizations[memberId].push(organizationId)

                if (organizationData.name === defaultOrganizationName) {
                  membersInDefaultOrganization.push(memberId)
                }
              }
            }

            membersData_all.push(...(membersData_organization as Array<OrganizationMemberDataType>))

            // delete organizationData.membersWithRole
            organizationsData_all.push(organizationData as OrganizationDataType)
          }
        }
      }
    }

    const membersData_unique: Array<OrganizationMemberDataType> = getUniqueItems(membersData_all)
    const membersData_withOrganizations: Array<OrganizationMemberDataType> =
      linkMemberToOrganizations({
        membersData_unique,
        memberOrganizations,
      })

    const organizationsData_unique: any = getUniqueItems(organizationsData_all)

    const membersData_withOnbordingData: any = await checkMembersOnbordingConditions({
      membersData: membersData_withOrganizations,
      membersInDefaultOrganization,
      membersWithou2fa,
    })

    setMembersData(membersData_withOnbordingData)
    setOrganizationsData(organizationsData_unique)
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
