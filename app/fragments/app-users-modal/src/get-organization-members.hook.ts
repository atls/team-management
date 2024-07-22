import { GET_ORGANIZATION_MEMBERS }    from '@globals/data'
import { GetOrganizationMembersQuery } from '@globals/data'
import { octokitGraphqlClient }        from '@globals/data'
import { getTokenCookie }              from '@globals/helpers'

import { MEMBERS_LIMIT }                from './users-modal.constants.js'

export const getOrganizationMembersHook = async ({ organizationId, setMembersData, toast }) => {
  try {
    const token = getTokenCookie(document)
    const client = octokitGraphqlClient(token)

    const response = (await client(GET_ORGANIZATION_MEMBERS, {
      organizationId,
      organizationMembersLimit: MEMBERS_LIMIT,
    })) as GetOrganizationMembersQuery

    if (response && response.node && 'membersWithRole' in response.node) {
      const {
        node: {
          membersWithRole: { nodes: membersData },
        },
      } = response

      setMembersData(membersData)
    }
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast(e.message, e.status)
  }
}
