import { RefObject }           from 'react'
import { useEffect }           from 'react'

import { UseHoverStateResult } from './use-hover-state.interfaces'
import { useHoverStateHook }   from './use-hover-state.hook'

export const useHoverHook = (node: RefObject<HTMLDivElement>): UseHoverStateResult => {
  const [hovered, setHovered] = useHoverStateHook()

  useEffect(() => {
    const onMouseEnter = () => setHovered(true)
    const onMouseLeave = () => setHovered(false)

    const { current } = node

    current?.addEventListener('mouseenter', onMouseEnter)
    current?.addEventListener('mouseleave', onMouseLeave)

    return () => {
      current?.removeEventListener('mouseenter', onMouseEnter)
      current?.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [node, setHovered])

  return [hovered, setHovered]
}
