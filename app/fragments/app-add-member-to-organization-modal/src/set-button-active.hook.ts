export const setButtonActiveHook = ({ modalButtonState, selectedUsers, setModalButtonState }) => {
  if (selectedUsers.length) {
    setModalButtonState('active')
  } else {
    if (modalButtonState !== 'successed') {
      setModalButtonState('disabled')
    }
  }
}
