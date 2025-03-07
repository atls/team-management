import type { SetButtonActiveType } from './set-button-active.interface.js'

export const setButtonActiveHook: SetButtonActiveType = ({
  inviteButtonState,
  selectedUsers,
  setInviteButtonState,
}) => {
  if (selectedUsers.length && inviteButtonState !== 'successed') {
    setInviteButtonState('active')
  } else if (!selectedUsers.length) {
    setInviteButtonState('disabled')
  }
}
