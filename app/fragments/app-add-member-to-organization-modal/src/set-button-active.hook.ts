export const setButtonActiveHook = ({ selectedUsers, setButtonActive }) => {
  if (selectedUsers.length) {
    setButtonActive(true)
  } else {
    setButtonActive(false)
  }
}
