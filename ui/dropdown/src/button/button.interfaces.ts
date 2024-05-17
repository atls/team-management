import { BoxProps } from '@atls-ui-parts/layout'

import { JSX }      from 'react'

export interface DropdownButtonProps extends BoxProps {
  children?: JSX.Element | string
  triggerProps: object
  onClick: VoidFunction
  isOpen: boolean
}

export interface DropdownButtonContainerProps extends BoxProps {
  pressed: boolean
  hover: boolean
}
