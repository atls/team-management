import { styleFn }    from 'styled-system'
import { prop }       from 'styled-tools'
import { switchProp } from 'styled-tools'

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

const lightAppearanceStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.input.light.backgroundColor,
  color: theme.colors.input.light.fontColor,
})

const darkAppearanceStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.input.dark.backgroundColor,
  color: theme.colors.input.dark.fontColor,
})

export const appearanceStyles = switchProp(prop('mode', 'light'), {
  light: lightAppearanceStyles,
  dark: darkAppearanceStyles,
})
