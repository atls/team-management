import React                 from 'react'
import { PropsWithChildren } from 'react'
import { maxHeight }         from 'styled-system'

import { ScrollProps }       from './scroll.interface.js'
import { ScrollContainer }   from './scroll.styles.js'

{
  /* TODO interfaces */
}
const Scroll: React.FC<PropsWithChildren<ScrollProps>> = ({ children, height, maxHeight }) => (
  <ScrollContainer height={height} maxHeight={maxHeight}>
    {children}
  </ScrollContainer>
)

export { Scroll }
