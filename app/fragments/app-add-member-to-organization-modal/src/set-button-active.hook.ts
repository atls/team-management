export const setButtonActiveHook = ({ inviteButtonState, selectedUsers, setInviteButtonState }) => {
  if (selectedUsers.length && inviteButtonState !== 'successed') {
    setInviteButtonState('active')
  } else if (!selectedUsers.length) {
    setInviteButtonState('disabled')
  }
}
