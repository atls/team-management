import { styleFn } from 'styled-system'

export const baseErrorMessageStyles: styleFn = ({ theme }) => ({
  fontSize: theme.fontSizes.small.increased,
  position: 'absolute',
  top: theme.spaces.zero - theme.spaces.tiny - theme.fontSizes.small.increased,
  right: theme.spaces.zero + theme.spaces.large,
})

export const appearanceErrorMessageStyles: styleFn = ({ theme }) => ({
  color: theme.colors.RED_400,
})
