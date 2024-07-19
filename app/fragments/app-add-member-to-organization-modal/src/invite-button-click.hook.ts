import { inviteMemberToOrgaization } from '@globals/data'
import { getTokenCookie }            from '@globals/helpers'

export const inviteButtonClickHook = async ({
  organizationLogin,
  selectedTeams,
  toastNotificationDispatch,
  selectedUsers,
  setInviteButtonState,
}) => {
  const token = getTokenCookie(document)

  try {
    for (const selectedUser of selectedUsers) {
      const { githubUserId } = selectedUser
      inviteMemberToOrgaization({
        token,
        organizationLogin,
        githubUserId,
        teamIds: selectedTeams,
      }).catch((e) => {
        // TODO
        // Можно ли выводить ошибку промиса в основной поток?

        // eslint-disable-next-line no-console
        console.error(e)
        toastNotificationDispatch({
          type: 'notify',
          toastNotification: { type: 'error', text: e.message, code: e.status || 0 },
        })
      })
    }

    setInviteButtonState('successed')
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toastNotificationDispatch({
      type: 'notify',
      toastNotification: { type: 'error', text: e.message, code: e.status || 0 },
    })
  }
}
