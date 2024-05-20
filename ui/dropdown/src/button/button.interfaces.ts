import { BoxProps }     from '@atls-ui-parts/layout'

import { TriggerProps } from 'react-laag'

export interface DropdownButtonProps extends BoxProps {
  triggerProps: TriggerProps
  onClick: VoidFunction
  isOpen: boolean
}

export interface DropdownButtonContainerProps extends BoxProps {
  pressed: boolean
  hover: boolean
}
