import type { styleFn } from 'styled-system'

import styled           from '@emotion/styled'

export const scrollContainerBaseStyles: styleFn = ({ theme, height, maxHeight }) => ({
  width: theme.spaces.fullWidth,
  height,
  maxHeight,
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
