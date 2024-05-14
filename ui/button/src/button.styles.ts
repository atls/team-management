import { createShapeStyles }   from '@atls-ui-parts/button'
import { createContentStyles } from '@atls-ui-parts/button'

import { styleFn }             from 'styled-system'
import { prop }                from 'styled-tools'
import { switchProp }          from 'styled-tools'
import { ifProp }              from 'styled-tools'

import { getBaseStyles }       from './styles'

export const fillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

const middlingRoundedPaddingtStyles = createShapeStyles({
  size: 42,
  rounding: prop('theme.radii.f24') as unknown as number,
  paddingLeft: 12,
  paddingRight: 12,
})
//
// const withoutPaddingMicroHeightStyles = createShapeStyles({
//   size: 'auto',
//   rounding: prop('theme.radii.zero') as unknown as number,
//   paddingLeft: 0,
//   paddingRight: 0,
// })
//
// const middlingPaddingSemiBigHeightStyles = createShapeStyles({
//   size: 53,
//   rounding: prop('theme.radii.medium') as unknown as number,
//   paddingLeft: 17,
//   paddingRight: 17,
// })
//

export const baseStyles = getBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  middlingRoundedPaddingtStyles: middlingRoundedPaddingtStyles,
  // withoutPaddingMicroHeight: withoutPaddingMicroHeightStyles,
})
