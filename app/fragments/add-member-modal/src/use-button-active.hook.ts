import { useEffect }   from 'react'
import { useCallback } from 'react'

export const useButtonActiveHook = (checkedSwitches, setButtonActive) => {
  const setButtonActiveFn = (): void => {
    if (checkedSwitches.length) setButtonActive(true)
    else setButtonActive(false)
  }

  const setButtonActiveCallback = useCallback(setButtonActiveFn, [setButtonActive, checkedSwitches])

  return useEffect(setButtonActiveCallback, [setButtonActiveCallback])
}
