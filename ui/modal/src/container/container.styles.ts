import { styleFn } from 'styled-system'

export const baseContainerStyles: styleFn = ({ theme }) => ({
  zIndex: theme.spaces.s1300,
  bottom: theme.spaces.zero,
  top: theme.spaces.zero,
  left: theme.spaces.zero,
  right: theme.spaces.zero,
})
