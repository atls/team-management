import type { GetMembersDataType }                  from './get-members-data.interfaces.js'

import { GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS } from '@globals/data'
import { octokitGraphqlClient }                     from '@globals/data'
import { getTokenCookie }                           from '@globals/helpers'

import { getUniqueMembers }                         from './helpers/index.js'

export const getMembersData: GetMembersDataType = async ({
  toast,
  setMembersData,
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
    for (const organizationData of organizationsData) {
      const {
        membersWithRole: { nodes: organizationMembersData },
      } = organizationData
      allMembersData.push(...organizationMembersData)
    }

    const uniqueMembersData = getUniqueMembers(allMembersData)

    // TODO set organizations data

    setMembersData(uniqueMembersData)
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
