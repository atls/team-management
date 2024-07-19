import { GET_ORGANIZATION_MEMBERS }    from '@globals/data'
import { GetOrganizationMembersQuery } from '@globals/data'
import { octokitGraphqlClient }        from '@globals/data'
import { getTokenCookie }              from '@globals/helpers'

const MEMBERS_LIMIT = 32

export const getOrganizationMembersHook = async ({
  organizationId,
  setMembersData,
  toastNotificationDispatch,
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

      setMembersData(membersData)
    }
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toastNotificationDispatch({
      type: 'notify',
      toastNotification: { type: 'error', text: e.message, code: e.status || 0 },
    })
  }
}
