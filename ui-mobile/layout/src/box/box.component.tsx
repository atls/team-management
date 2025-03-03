import type { BoxProps } from './box.interfaces'

import React             from 'react'

import { BoxElement }    from './box.element'

export const Box = ({ children, ...props }: BoxProps) => (
  <BoxElement {...props}>{children}</BoxElement>
)
