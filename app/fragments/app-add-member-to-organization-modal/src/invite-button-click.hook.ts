import { inviteMemberToOrgaization } from '@globals/data'
import { getTokenCookie }            from '@globals/helpers'

export const inviteButtonClickHook = async ({
  organizationLogin,
  selectedUsers,
  selectedTeams,
  onBackdropClick,
}) => {
  const token = getTokenCookie(document)

  try {
    for (const selectedUser of selectedUsers) {
      const { githubUserId } = selectedUser

      await inviteMemberToOrgaization({
        // token,
        token: '123',
        organizationLogin,
        githubUserId,
        teamIds: selectedTeams,
      })
    }

    // TODO нужно ли оповещать юсера об успешном выполнении запроса?

    onBackdropClick()
  } catch (e: any) {
    console.error(e)
    // TODO error to client
  }
}
