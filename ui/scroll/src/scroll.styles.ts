import styled from '@emotion/styled'

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

export { ScrollContainer }
