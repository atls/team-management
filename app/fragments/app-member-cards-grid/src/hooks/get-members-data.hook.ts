import type { GetMembersDataType }                       from './get-members-data.interfaces.js'
/* eslint-disable @typescript-eslint/naming-convention */
import type { GetViewerAllOrganizationsAllMembersQuery } from '@globals/data'
import type { OrganizationMemberType }                   from '@globals/data'

import { GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS }      from '@globals/data'
import { octokitGraphqlClient }                          from '@globals/data'
import { getTokenCookie }                                from '@globals/helpers'

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
    const token = getTokenCookie(document)
    const client = octokitGraphqlClient(token)

    const response = (await client(GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS, {
      organizationsLimit,
      organizationMembersLimit,
    })) as GetViewerAllOrganizationsAllMembersQuery

    const organizationsData_response = response.viewer.organizations.nodes

    // TODO interfaces
    const membersData_all: any[] = []
    const organizationsData_all: any[] = []
    const memberOrganizations: Record<string, Array<string>> = {}

    // memberId:
    // const membersInDefaultOrganization = []

    if (!organizationsData_response?.length) return

    for (const organizationData of organizationsData_response) {
      const membersData_organization = organizationData?.membersWithRole
        .nodes as Array<OrganizationMemberType>

      for (const memberData of membersData_organization) {
        const { id: memberId } = memberData
        // TODO interface
        const { id: organizationId } = organizationData as any

        if (!memberOrganizations[memberId]) {
          memberOrganizations[memberId] = []
        }

        memberOrganizations[memberId].push(organizationId)
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
