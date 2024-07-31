import { GET_ORGANIZATION_MEMBERS }    from '@globals/data'
import { GetOrganizationMembersQuery } from '@globals/data'
import { OrganizationMemberDataType }  from '@globals/data'
import { octokitGraphqlClient }        from '@globals/data'
import { getTokenCookie }              from '@globals/helpers'

import { MEMBERS_LIMIT }               from '../users-modal.constants.js'
import { GetOrganizationMembersType }  from './get-organization-members.interface.js'

export const getOrganizationMembersHook: GetOrganizationMembersType = async ({
  organizationId,
  setMembersData,
  toast,
}) => {
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

      setMembersData(membersData as Array<OrganizationMemberDataType>)
    }
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
