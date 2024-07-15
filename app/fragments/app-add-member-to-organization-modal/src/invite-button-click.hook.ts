import { inviteMemberToOrgaization } from '@globals/data'
import { getTokenCookie }            from '@globals/helpers'

export const inviteButtonClickHook = async ({
  organizationLogin,
  selectedUsers,
  selectedTeams,
  onBackdropClick,
  errorMessageDispatch,
}) => {
  const token = getTokenCookie(document)

  try {
    for (const selectedUser of selectedUsers) {
      const { githubUserId } = selectedUser

      await inviteMemberToOrgaization({
        token,
        organizationLogin,
        githubUserId,
        teamIds: selectedTeams,
      })
    }

    // TODO нужно ли оповещать юсера об успешном выполнении запроса?

    onBackdropClick()
  } catch (e: any) {
    console.error(e)
    errorMessageDispatch({
      type: 'set',
      errorMessage: { text: e.message, code: e.status || 0 },
    })
  }
}
