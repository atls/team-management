import { styleFn } from 'styled-system'

export const baseThemeSelectorRowStyles: styleFn = ({ theme }) => ({
  position: 'absolute',
  justifyContent: 'space-between',
  top: theme.spaces.large,
  right: theme.spaces.large,
})

export const shapeThemeSelectorRowStyles: styleFn = ({ theme }) => ({
  maxWidth: theme.spaces.semiSuper,
})
