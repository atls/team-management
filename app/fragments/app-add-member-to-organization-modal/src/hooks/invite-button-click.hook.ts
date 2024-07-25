import type { InviteButtonClickType }      from './invite-button-click.interface.js'

import { inviteMemberToOrganizationQuery } from '@globals/data'
import { createOctokitRestClient }         from '@globals/data'
import { getTokenCookie }                  from '@globals/helpers'

export const inviteButtonClickHook: InviteButtonClickType = async ({
  organizationLogin,
  selectedTeams,
  toast,
  selectedUsers,
  setInviteButtonState,
}) => {
  const token = getTokenCookie(document)

  try {
    const restClient = createOctokitRestClient(token)
    for await (const selectedUser of selectedUsers) {
      const { githubUserId } = selectedUser

      const query = inviteMemberToOrganizationQuery({
        organizationLogin,
        githubUserId,
        teamIds: selectedTeams,
      }) as [any]

      await restClient(...query)
    }

    setInviteButtonState('successed')
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
