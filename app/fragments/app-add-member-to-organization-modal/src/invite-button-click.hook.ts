import { inviteMemberToOrgaization } from '@globals/data'
import { getTokenCookie }            from '@globals/helpers'

export const inviteButtonClickHook = async ({
  organizationLogin,
  selectedUsers,
  selectedTeams,
  toastNotificationDispatch,
  setModalButtonState,
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
        // странный момент?
        // если не делаю этот catch, то ошибка падает в глобальный catch
        // ошибку ПРОМИСА можно выводить както в общий поток?
        // или ошибку промиса ловим отдельно, ошибку общего потока - отдельно?

        console.error(e)
        toastNotificationDispatch({
          type: 'notify',
          toastNotification: { text: e.message, code: e.status || 0 },
        })
      })
    }

    setModalButtonState('successed')
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log('outter error on hook')
    console.error(e)
    toastNotificationDispatch({
      type: 'notify',
      errorMessage: { text: e.message, code: e.status || 0 },
    })
  }
}