import { createShapeStyles } from '@atls-ui-parts/avatar'

import { AvatarShapeStyles } from './shape.interfaces'

export const getShapeStyles = ({ size, borderWidth, padding, borderRadius }: AvatarShapeStyles) =>
  createShapeStyles({
    size: size,
    borderWidth: borderWidth ?? 1,
    padding: padding ?? 0,
    borderRadius: borderRadius ?? 0,
  })
