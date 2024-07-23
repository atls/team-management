import { useEffect }                from 'react'

import { inviteButtonClickHook }    from './hooks/index.js'
import { getOrganizatoinTeamsHook } from './hooks/index.js'
import { setButtonActiveHook }      from './hooks/index.js'

export const AddMemberToOrganizationHook = ({
  open,
  toast,
  organizationId,
  organizationLogin,
  teamsData,
  setTeamsData,
  selectedUsers,
  inviteButtonState,
  setInviteButtonState,
  selectedTeams,
  setSelectedTeams,
}) => {
  useEffect(() => {
    if (open && !teamsData.length) {
      getOrganizatoinTeamsHook({
        organizationId,
        setTeamsData,
        toast,
      })
    }
  }, [open, toast, organizationId, teamsData, setTeamsData])

  useEffect(
    () => setButtonActiveHook({ inviteButtonState, selectedUsers, setInviteButtonState }),
    [selectedUsers, inviteButtonState, setInviteButtonState]
  )

  const switchHandler = (e, teamId) => {
    if (selectedTeams.includes(teamId as never)) {
      setSelectedTeams(selectedTeams.filter((c) => c !== (teamId as never)))
    } else {
      setSelectedTeams(selectedTeams.concat([teamId as never]))
    }
  }

  const inviteButtonClickHandler = () =>
    inviteButtonClickHook({
      organizationLogin,
      selectedTeams,
      toast,
      selectedUsers,
      setInviteButtonState,
    })

  return {
    switchHandler,
    inviteButtonClickHandler,
  }
}
