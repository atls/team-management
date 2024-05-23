import { useState }            from 'react'
import { useCallback }         from 'react'

import { UseHoverStateResult } from './use-hover-state.interfaces'

export const useHoverStateHook = (): UseHoverStateResult => {
  const [hovered, setHovered] = useState<boolean>(false)

  const change = useCallback(
    (nextValue?: boolean | any): void => {
      const value = nextValue === true || nextValue === false ? nextValue : !hovered

      setHovered(value)
    },
    [hovered]
  )

  return [hovered, change]
}
