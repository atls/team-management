import styled       from '@emotion/styled'

import React        from 'react'

import ScrollProps from './scroll.interface'

const ScrollContainer = styled.div`
  width: 100%;
  height: 100px;
  overflow-y: scroll;
  scrollbar-width: auto;
  scrollbar-color: #C5DCFD transparent;
  
  &::-webkit-scrollbar-thumb {
    background-color: #C5DCFD;
    border-radius: 20px;
    border: 3px solid transparent;
  }
`

const Scroll: React.FC<ScrollProps> = ({ children }) => {
  return <ScrollContainer>{children}</ScrollContainer>
}

export { Scroll }
