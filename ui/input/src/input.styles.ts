import { styleFn }    from 'styled-system'
import { prop }       from 'styled-tools'
import { switchProp } from 'styled-tools'

export const shapeStyles: styleFn = ({ theme }) => ({
  fontFamily: theme.fonts.primary,
  size: theme.spaces.sizes.input,
  fontWeight: theme.fontWeights.normal,
  fontSize: theme.fontSizes.small.semiLarge,
  borderRadius: theme.radii.f9,
  padding: theme.spaces.s18,
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
