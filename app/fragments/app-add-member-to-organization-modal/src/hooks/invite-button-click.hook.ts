import type { InviteButtonClickType }         from './invite-button-click.interface.js'

import { inviteMemberToOrganizationGetQuery } from '@globals/data'
import { requestOctokitRestData }             from '@globals/data'

export const inviteButtonClickHook: InviteButtonClickType = async ({
  organizationLogin,
  selectedTeams,
  toast,
  selectedUsers,
  setInviteButtonState,
}) => {
  try {
    for await (const selectedUser of selectedUsers) {
      const { id: githubUserId } = selectedUser

      const query = inviteMemberToOrganizationGetQuery({
        organizationLogin,
        githubUserId,
        teamIds: selectedTeams as never,
      })

      await requestOctokitRestData(document, query)
    }

    setInviteButtonState('successed')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    toast.error(e.message, e.status)
  }
}
