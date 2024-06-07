import styled      from '@emotion/styled'

import { styleFn } from 'styled-system'

export const scrollContainerBaseStyles: styleFn = ({ theme, height }) => ({
  width: theme.spaces.fullWidth,
  height,
  overflowY: 'scroll',
  scrollbarWidth: 'thin',
  scrollbarColor: theme.colors.scroll.default.scrollbarColor,
})

export const scrollContainerWebkitStyles: styleFn = ({ theme }) => ({
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.colors.scroll.default.scrollbarColor,
    borderRadius: theme.radii.extra,
    border: theme.borders.medium,
  },
  '&::-webkit-scrollbar': {
    backgroundColor: theme.colors.scroll.default.scrollbarColor,
    borderRadius: theme.radii.extra,
    border: theme.borders.medium,
  },
})

const ScrollContainer = styled.div(scrollContainerBaseStyles, scrollContainerWebkitStyles)

export { ScrollContainer }
