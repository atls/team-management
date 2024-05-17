import { createShapeStyles } from '@atls-ui-parts/avatar'

export const getShapeStyles = ({ size, fontWeight }: { size?: number; fontWeight?: number }) =>
  createShapeStyles({
    fontFamily: 'font',
    size: size ?? 12,
    borderWidth: 500,
    fontSize: 14,
    padding: 20,
    fontWeight,
    borderRadius: 10,
  })
