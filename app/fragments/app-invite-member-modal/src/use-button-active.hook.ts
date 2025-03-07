import type { UseButtonActiveHookType } from './invite-member-modal.interfaces.js'

import { useEffect }                    from 'react'
import { useCallback }                  from 'react'

export const useButtonActiveHook: UseButtonActiveHookType = (checkedSwitches, setButtonActive) => {
  const setButtonActiveFn = (): void => {
    if (checkedSwitches.length) setButtonActive(true)
    else setButtonActive(false)
  }

  const setButtonActiveCallback = useCallback(setButtonActiveFn, [setButtonActive, checkedSwitches])

  useEffect(setButtonActiveCallback, [setButtonActiveCallback])
}
