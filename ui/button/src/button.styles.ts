import { createShapeStyles }   from '@atls-ui-parts/button'
import { createContentStyles } from '@atls-ui-parts/button'

import { styleFn }             from 'styled-system'
import { prop }                from 'styled-tools'
import { switchProp }          from 'styled-tools'
import { ifProp }              from 'styled-tools'

import { getBaseStyles }       from './styles'

export const fillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

const middlingRoundedPadding = createShapeStyles({
  size: 42,
  rounding: prop('theme.radii.f24') as unknown as number,
  paddingLeft: 12,
  paddingRight: 12,
})
const bigRoundedPadding = createShapeStyles({
  size: 96.91,
  rounding: prop('theme.radii.f50') as unknown as number,
  paddingLeft: 24,
  paddingRight: 24,
})

const smallRoundedPadding = createShapeStyles({
  size: 42,
  rounding: prop('theme.radii.f12') as unknown as number,
  paddingLeft: 12,
  paddingRight: 12,
})

export const baseStyles = getBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  middlingRoundedPadding: middlingRoundedPadding,
  smallRoundedPadding: smallRoundedPadding,
  bigRoundedPadding: bigRoundedPadding,
})
