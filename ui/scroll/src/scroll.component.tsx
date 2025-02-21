import type { PropsWithChildren } from 'react'

import type { ScrollProps }       from './scroll.interface.js'

import React                      from 'react'

import { ScrollContainer }        from './scroll.styles.js'

const Scroll: React.FC<PropsWithChildren<ScrollProps>> = ({ children, height, maxHeight }) => (
  <ScrollContainer height={height} maxHeight={maxHeight}>
    {children}
  </ScrollContainer>
)

export { Scroll }
