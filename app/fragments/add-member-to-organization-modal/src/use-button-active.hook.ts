import { useEffect }   from 'react'
import { useCallback } from 'react'

export const useButtonActiveHook = (selectedUsers, checkedSwitches, setButtonActive) => {
  const setButtonActiveFn = (): void => {
    if (selectedUsers.length && checkedSwitches.length) setButtonActive(true)
    else setButtonActive(false)
  }

  const setButtonActiveCallback = useCallback(setButtonActiveFn, [
    selectedUsers,
    setButtonActive,
    checkedSwitches,
  ])

  return useEffect(setButtonActiveCallback, [setButtonActiveCallback])
}
