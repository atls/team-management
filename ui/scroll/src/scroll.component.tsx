import React                 from 'react'
import { PropsWithChildren } from 'react'

import { ScrollProps }       from './scroll.interface.js'
import { ScrollContainer }   from './scroll.styles.js'

const Scroll: React.FC<PropsWithChildren<ScrollProps>> = ({ children, height }) => (
  <ScrollContainer height={height}>{children}</ScrollContainer>
)

export { Scroll }
