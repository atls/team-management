import { createShapeStyles } from '@atls-ui-parts/avatar'

import { AvatarShapeStyles } from './shape.interfaces.js'

export const getShapeStyles = ({ size, borderWidth, padding, borderRadius }: AvatarShapeStyles) =>
  createShapeStyles({
    size: size ?? 0,
    borderWidth: borderWidth ?? 0,
    padding: padding ?? 0,
    borderRadius: borderRadius ?? 0,
  })
