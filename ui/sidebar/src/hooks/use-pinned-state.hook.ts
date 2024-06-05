import { useState }             from 'react'
import { useCallback }          from 'react'

import { UsePinnedStateResult } from './use-pinned-state.interfaces.js'

export const usePinnedStateHook = (): UsePinnedStateResult => {
  const [pinned, setPinned] = useState<boolean>(false)

  const change = useCallback(
    (nextValue?: boolean | any): void => {
      const value = nextValue === true || nextValue === false ? nextValue : !pinned

      setPinned(value)
    },
    [pinned]
  )

  return [pinned, change]
}
