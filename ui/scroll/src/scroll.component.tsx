import React               from 'react'

import { ScrollProps }     from './scroll.interface.js'
import { ScrollContainer } from './scroll.styles.js'

const Scroll: React.FC<ScrollProps> = ({ children }) => (
  <ScrollContainer>{children}</ScrollContainer>
)

export { Scroll }
