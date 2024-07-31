import type { GetMembersDataType }                       from './get-members-data.interfaces.js'
/* eslint-disable @typescript-eslint/naming-convention */
import type { GetViewerAllOrganizationsAllMembersQuery } from '@globals/data'
import type { OrganizationMemberType }                   from '@globals/data'

import { GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS }      from '@globals/data'
import { OrganizationMemberDataType }                    from '@globals/data'
import { OrganizationDataType }                          from '@globals/data'
import { octokitGraphqlClient }                          from '@globals/data'
import { getTokenCookie }                                from '@globals/helpers'

import { checkMembersOnbordingConditions }               from './check-members-onbording-conditions.hook.js'
import { getMembersWithout2fa }                          from './get-members-withot-2fa.hook.js'
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
    const token = getTokenCookie(document)

    const client = octokitGraphqlClient(token)

    const response = (await client(GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS, {
      organizationsLimit,
      organizationMembersLimit,
    })) as GetViewerAllOrganizationsAllMembersQuery

    const organizationsData_response = response.viewer.organizations.nodes
    if (!organizationsData_response?.length) return

    const membersData_all: Array<OrganizationMemberDataType> = []
    const organizationsData_all: Array<OrganizationDataType> = []
    const memberOrganizations: Record<string, Array<string>> = {}

    const defaultOrganizationName = process.env.NEXT_PUBLIC_GITHUB_ORG_NAME as string
    const membersWithou2fa = await getMembersWithout2fa(token)
    const membersInDefaultOrganization: Array<string> = []

    for (const organizationData of organizationsData_response) {
      if (!organizationData) continue
      const {
        membersWithRole: { nodes: organizationMembers },
      } = organizationData
      if (!organizationMembers) continue

      for (const { id: memberId } of organizationMembers as any) {
        if (organizationData.name === defaultOrganizationName) {
          membersInDefaultOrganization.push(memberId)
        }
      }

      const {
        membersWithRole: { nodes: membersData_organization },
      } = organizationData

      if (!membersData_organization) continue

      for (const { id: memberId } of membersData_organization) {
        const { id: organizationId } = organizationData

        if (!memberOrganizations[memberId]) {
          memberOrganizations[memberId] = []
        }

        memberOrganizations[memberId].push(organizationId)

        if (organizationData.name === defaultOrganizationName) {
          membersInDefaultOrganization.push(memberId)
        }
      }

      membersData_all.push(...membersData_organization)

      // delete organizationData.membersWithRole
      organizationsData_all.push(organizationData)
    }

    const membersData_unique: any[] = getUniqueItems(membersData_all)
    const membersData_withOrganizations = linkMemberToOrganizations({
      membersData_unique,
      memberOrganizations,
    })

    const organizationsData_unique: any = getUniqueItems(organizationsData_all)

    const membersData_withOnbordingData: any = await checkMembersOnbordingConditions({
      membersData: membersData_withOrganizations,
      organizationsData: organizationsData_unique,
      membersInDefaultOrganization,
      membersWithou2fa,
    })

    // TODO interface
    setMembersData(membersData_withOnbordingData)
    setOrganizationsData(organizationsData_unique)
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
