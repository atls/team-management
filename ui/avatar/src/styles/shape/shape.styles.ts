import { createShapeStyles } from '@atls-ui-parts/avatar'

import { AvatarShapeStyles } from './shape.interfaces'

export const getShapeStyles = ({ size, borderWidth, padding, borderRadius }: AvatarShapeStyles) =>
  createShapeStyles({
    size,
    borderWidth: borderWidth ?? 0,
    padding: padding ?? 0,
    borderRadius: borderRadius ?? 0,
  })
