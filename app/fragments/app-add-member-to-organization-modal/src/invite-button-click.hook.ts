import { inviteMemberToOrgaization } from '@globals/data'
import { getTokenCookie }            from '@globals/helpers'

export const inviteButtonClickHook = async ({
  organizationLogin,
  selectedUsers,
  selectedTeams,
  onBackdropClick,
  errorMessageDispatch,
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
        errorMessageDispatch,
      })
    }
    setModalButtonState('successed')
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    errorMessageDispatch({
      type: 'set',
      errorMessage: { text: e.message, code: e.status || 0 },
    })
  }
}
