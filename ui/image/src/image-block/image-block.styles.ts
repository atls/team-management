import { styleFn } from 'styled-system'

export const createBaseImageBlockStyles: styleFn = () =>
  ({ borderRadius }) => ({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius,
  })
