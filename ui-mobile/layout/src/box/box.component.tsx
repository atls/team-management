import type { PropsWithChildren } from 'react'
import type { FC }                from 'react'

import type { BoxProps }          from './box.interfaces'

import React                      from 'react'

import { BoxElement }             from './box.element'

export const Box: FC<PropsWithChildren<BoxProps>> = ({ children, ...props }) => (
  <BoxElement {...props}>{children}</BoxElement>
)
