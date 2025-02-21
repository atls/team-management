import type { styleFn } from 'styled-system'

export const appearanceDotStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.dropdown.dot.background,
})

export const sizeDotStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.semiTiny,
  height: theme.spaces.semiTiny,
})
