import React          from 'react'

import { BoxElement } from './box.element'
import { BoxProps }   from './box.interfaces'

export const Box = ({ children, ...props }: BoxProps) => (
  <BoxElement {...props}>{children}</BoxElement>
)
