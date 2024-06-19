import { backgrounds }           from './backgrounds.js'
import { borders }               from './borders.js'
import { colors as colorsDark }  from './colors_dark.js'
import { colors as colorsLight } from './colors_light.js'
import { fonts }                 from './fonts.js'
import { fontSizes }             from './fontSizes.js'
import { fontWeights }           from './fontWeights.js'
import { lineHeights }           from './lineHeights.js'
import { radii }                 from './radii.js'
import { shadows }               from './shadows.js'
import { space }                 from './space.js'
import { spaces }                from './spaces.js'

const baseTheme = {
  backgrounds,
  borders,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  space,
  spaces,
}

export const lightTheme = {
  themeName: 'light',
  colors: colorsLight,
  ...baseTheme,
}

export const darkTheme = {
  themeName: 'dark',
  colors: colorsDark,
  ...baseTheme,
}
