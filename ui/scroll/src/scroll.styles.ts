import styled      from '@emotion/styled'

import { styleFn } from 'styled-system'

export const scrollContainerBaseStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.fullWidth,
  height: theme.spaces.gigantic,
  overflowY: 'scroll',
  scrollbarWidth: 'auto',
  scrollbarColor: theme.colors.scroll.default.scrollbarColor,
})

export const scrollContainerWebkitStyles: styleFn = ({ theme }) => ({
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.colors.scroll.default.scrollbarColor,
    borderRadius: theme.radii.extra,
    border: theme.borders.medium,
  },
})

const ScrollContainer = styled.div(scrollContainerBaseStyles, scrollContainerWebkitStyles)

export { ScrollContainer }
