import type { BoxProps }     from '@atls-ui-parts/layout'
import type { Theme }        from '@emotion/react'
import type { TriggerProps } from 'react-laag'

export interface DropdownButtonProps extends BoxProps {
  triggerProps: TriggerProps
  onClick: VoidFunction
  isOpen: boolean
}

export interface DropdownButtonContainerProps extends BoxProps {
  pressed: boolean
  hover: boolean
}

export interface DotTheme extends Theme {
  // spaces: Record<string, string | number>
  spaces?: {
    normalCount: number
  }
}
