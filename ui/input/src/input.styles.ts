import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'

import { createBaseStyles }       from '@atls-ui-parts/input'
import { createShapeStyles }      from '@atls-ui-parts/input'
import { createAppearanceStyles } from '@atls-ui-parts/input'

export const shapeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  size: 52,
  fontWeight: 400,
  fontSize: 13,
  rounding: 9,
  paddingLeft: 18,
  paddingRight: 18,
})

export const baseStyles = createBaseStyles()
export const appearanceStyles = createAppearanceStyles({
  backgroundColor: 'white',
  fontColor: 'black',
  borderColor: '#DADEED',
})

// export const shapeStyles = switchProp(prop('size', 'normal'), {
//   small: smallNormalSizeStyles,
//   normal: shapeNormalSizeStyles,
//   large: largeNormalSizeStyles,
// })
