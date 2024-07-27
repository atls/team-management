import type { GetMembersDataType }                  from './get-members-data.interfaces.js'

import { GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS } from '@globals/data'
import { octokitGraphqlClient }                     from '@globals/data'
import { getTokenCookie }                           from '@globals/helpers'

import { getUniqueItems }                           from './helpers/index.js'
import { fillMemberToOrganizations }                from './helpers/index.js'
import { linkMemberToOrganizations }                from './helpers/index.js'

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

    // TODO interface
    const response = (await client(GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS, {
      organizationsLimit,
      organizationMembersLimit,
    })) as any

    const {
      viewer: {
        organizations: { nodes: organizationsData },
      },
    } = response

    const allMembersData = []
    const allOrganizationsData = []
    const memberOrganizations = []

    for (const organizationData of organizationsData) {
      let {
        membersWithRole: { nodes: organizationMembersData },
      } = organizationData

      // TODO вынеси функцию
      for (const memberData of organizationMembersData) {
        fillMemberToOrganizations({
          memberData,
          organizationData,
          memberOrganizations,
        })
      }

      allMembersData.push(...organizationMembersData)

      delete organizationData.membersWithRole
      allOrganizationsData.push(organizationData)
    }

    const uniqueMembersData = getUniqueItems(allMembersData)
    const linkedMembersData = linkMemberToOrganizations({ uniqueMembersData, memberOrganizations })
    const uniqueOrganizationsData = getUniqueItems(allOrganizationsData)

    setMembersData(linkedMembersData)
    setOrganizationsData(uniqueOrganizationsData)
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
