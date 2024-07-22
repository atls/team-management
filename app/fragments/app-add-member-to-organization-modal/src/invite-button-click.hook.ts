import { inviteMemberToOrgaizationQuery } from '@globals/data'
import { octokitRestClient }              from '@globals/data'
import { getTokenCookie }                 from '@globals/helpers'

export const inviteButtonClickHook = async ({
  organizationLogin,
  selectedTeams,
  toast,
  selectedUsers,
  setInviteButtonState,
}) => {
  const token = getTokenCookie(document)

  try {
    const restClient = octokitRestClient(token)
    for (const selectedUser of selectedUsers) {
      const { githubUserId } = selectedUser

      const query = inviteMemberToOrgaizationQuery({
        organizationLogin,
        githubUserId,
        teamIds: selectedTeams,
      })

      restClient(...query).catch((e) => {
        // TODO
        // Можно ли выводить ошибку промиса в основной поток?

        // eslint-disable-next-line no-console
        console.error(e)
        toast.error(e.message, e.status)
      })
    }

    setInviteButtonState('successed')
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
