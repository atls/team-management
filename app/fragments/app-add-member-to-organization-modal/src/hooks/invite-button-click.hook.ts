import { inviteMemberToOrgaizationQuery } from '@globals/data'
import { octokitRestClient }              from '@globals/data'
import { getTokenCookie }                 from '@globals/helpers'

import { inviteButtonClickHookInterface } from '../add-member-to-organization-modal.interfaces.js'

export const inviteButtonClickHook: inviteButtonClickHookInterface = async ({
  organizationLogin,
  selectedTeams,
  toast,
  selectedUsers,
  setInviteButtonState,
}) => {
  const token = getTokenCookie(document)

  try {
    const restClient = octokitRestClient(token)
    for await (const selectedUser of selectedUsers) {
      const { githubUserId } = selectedUser

      const query = inviteMemberToOrgaizationQuery({
        organizationLogin,
        githubUserId,
        teamIds: selectedTeams,
      })

      await restClient(...query)
    }

    setInviteButtonState('successed')
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
