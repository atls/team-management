import { createShapeStyles }   from '@atls-ui-parts/button'
import { createContentStyles } from '@atls-ui-parts/button'

import { styleFn }             from 'styled-system'
import { prop }                from 'styled-tools'
import { switchProp }          from 'styled-tools'
import { ifProp }              from 'styled-tools'

import { getBaseStyles }       from './styles/index.js'

export const fillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

const middlingRoundedPadding = createShapeStyles({
  size: prop('theme.spaces.increased') as unknown as number,
  rounding: prop('theme.radii.f12') as unknown as number,
  paddingRight: prop('theme.spaces.large') as unknown as number,
  paddingLeft: prop('theme.spaces.large') as unknown as number,
})
const bigRoundedPadding = createShapeStyles({
  size: prop('theme.spaces.superGiant') as unknown as number,
  rounding: prop('theme.radii.f50') as unknown as number,
  paddingLeft: prop('theme.spaces.large') as unknown as number,
  paddingRight: prop('theme.spaces.large') as unknown as number,
})

const smallRoundedPadding = createShapeStyles({
  size: prop('theme.radii.semiBig') as unknown as number,
  rounding: prop('theme.radii.f12') as unknown as number,
  paddingLeft: prop('theme.spaces.micro') as unknown as number,
  paddingRight: prop('theme.spaces.micro') as unknown as number,
})

const microRoundedPadding = createShapeStyles({
  size: prop('theme.spaces.largest') as unknown as number,
  rounding: prop('theme.radii.f12') as unknown as number,
  paddingLeft: prop('theme.spaces.micro') as unknown as number,
  paddingRight: prop('theme.spaces.micro') as unknown as number,
  paddingRatio: 12,
})

const microIncreasedRoundedPadding = createShapeStyles({
  size: prop('theme.spaces.moderate') as unknown as number,
  rounding: prop('theme.radii.f7') as unknown as number,
  paddingLeft: prop('theme.spaces.micro') as unknown as number,
  paddingRight: prop('theme.spaces.micro') as unknown as number,
  paddingRatio: 12,
})

export const baseStyles = getBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  middlingRoundedPadding,
  smallRoundedPadding,
  bigRoundedPadding,
  microRoundedPadding,
  microIncreasedRoundedPadding,
})
