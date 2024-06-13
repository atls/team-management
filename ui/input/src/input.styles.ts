import { styleFn } from 'styled-system'

export const shapeStyles: styleFn = ({ theme }) => ({
  cursor: 'text',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.spaces.tiny,
  fontFamily: theme.fonts.primary,
  minHeight: theme.spaces.extra,
  size: theme.spaces.extra,
  fontWeight: theme.fontWeights.normal,
  fontSize: theme.fontSizes.small.semiLarge,
  borderRadius: theme.radii.miniMedium,
  padding: theme.spaces.semiRegular,
})

export const appearanceStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.input.backgroundColor,
  color: theme.colors.input.fontColor,
})
