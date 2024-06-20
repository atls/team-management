import { useEffect }               from 'react'
import { useCallback }             from 'react'

import { UseButtonActiveHookType } from './add-member-modal.interfaces.js'

export const useButtonActiveHook: UseButtonActiveHookType = (checkedSwitches, setButtonActive) => {
  const setButtonActiveFn = (): void => {
    if (checkedSwitches.length) setButtonActive(true)
    else setButtonActive(false)
  }

  const setButtonActiveCallback = useCallback(setButtonActiveFn, [setButtonActive, checkedSwitches])

  return useEffect(setButtonActiveCallback, [setButtonActiveCallback])
}
