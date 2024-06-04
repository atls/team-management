import React               from 'react'

import { ScrollProps }     from './scroll.interface'
import { ScrollContainer } from './scroll.styles'

const Scroll: React.FC<ScrollProps> = ({ children, height }) => (
  <ScrollContainer height={height}>{children}</ScrollContainer>
)

export { Scroll }
