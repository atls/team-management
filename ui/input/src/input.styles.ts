import { createBaseStyles }       from '@atls-ui-parts/input'
import { createShapeStyles }      from '@atls-ui-parts/input'
import { createAppearanceStyles } from '@atls-ui-parts/input'

import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'

export const baseStyles = createBaseStyles()

export const shapeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  size: 52,
  fontWeight: 400,
  fontSize: 13,
  rounding: 9,
  paddingLeft: 18,
  paddingRight: 18,
})

const lightAppearanceStyles = createAppearanceStyles({
  backgroundColor: prop('theme.colors.gray_200'),
  fontColor: prop('theme.colors.gray_1600'),
  // borderColor: '#DADEED',
})

const darkAppearanceStyles = createAppearanceStyles({
  backgroundColor: prop('theme.colors.gray_1400'),
  fontColor: prop('theme.colors.white'),
  // borderColor: '#DADEED',
})

export const appearanceStyles = switchProp(prop('mode', 'light'), {
  light: lightAppearanceStyles,
  dark: darkAppearanceStyles,
})
