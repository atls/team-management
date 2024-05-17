import { styleFn } from 'styled-system'

export const appearanceDotStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.dropdown.dot.background,
})

export const sizeDotStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.dropdown.dot,
  height: theme.spaces.dropdown.dot,
})
