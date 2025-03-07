import type { styleFn } from 'styled-system'

export const baseDeleteButtonStyles: styleFn = ({ theme }) => ({
  zIndex: theme.spaces.s1500,
  position: 'absolute',
  cursor: 'pointer',
  right: -1 * theme.spaces.regular,
})
