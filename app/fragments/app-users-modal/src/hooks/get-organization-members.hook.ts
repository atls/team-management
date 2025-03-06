import type { OrganizationMemberDataType } from '@globals/data'

import type { GetOrganizationMembersType } from './get-organization-members.interface.js'

import { GET_ORGANIZATION_MEMBERS }        from '@globals/data'
import { requestOctokitGraphqlData }       from '@globals/data'

import { MEMBERS_LIMIT }                   from '../users-modal.constants.js'

export const getOrganizationMembersHook: GetOrganizationMembersType = async ({
  organizationId,
  setMembersData,
  toast,
}) => {
  try {
    const response = await requestOctokitGraphqlData(document, GET_ORGANIZATION_MEMBERS, {
      organizationId,
      organizationMembersLimit: MEMBERS_LIMIT,
    })

    if (response?.node && 'membersWithRole' in response.node) {
      const {
        node: {
          membersWithRole: { nodes: membersData },
        },
      } = response

      setMembersData(membersData as Array<OrganizationMemberDataType>)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    toast.error(e.message, e.status)
  }
}
