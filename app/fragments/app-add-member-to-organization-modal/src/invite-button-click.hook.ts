import { inviteMemberToOrgaization } from '@globals/data'

export const inviteButtonClickHook = async ({
  errorMessageDispatch,
  organizationLogin,
  selectedUsers,
  selectedTeams,
  onBackdropClick,
}) => {
  // TODO change var name

  // TODO cookie from helpers
  const token = document.cookie.split('=').at(-1)

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
  } catch (e) {
    errorMessageDispatch({
      type: 'set',
      //     eslint-disable-next-line react-hooks/exhaustive-deps
      errorMessage: { text: e.message },
    })
    console.error(e.message)
    // TODO оповестить юсера об ошибке
  }
}
