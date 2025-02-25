import type { styleFn }           from 'styled-system'

import type { AvatarShapeStyles } from './shape.interfaces.js'

import { createShapeStyles }      from '@atls-ui-parts/avatar'

export const getShapeStyles = ({
  size,
  borderWidth,
  padding,
  borderRadius,
}: AvatarShapeStyles): styleFn =>
  createShapeStyles({
    size: size ?? 0,
    borderWidth: borderWidth ?? 0,
    padding: padding ?? 0,
    borderRadius: borderRadius ?? 0,
  })
