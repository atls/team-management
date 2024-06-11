import { styleFn } from 'styled-system'

export const createBaseImageBlockStyles: styleFn = (theme) =>
  ({ borderRadius }) => ({
    display: 'block',
    height: theme.spaces.fullWidth,
    width: theme.spaces.fullWidth,
    objectFit: 'cover',
    borderRadius,
  })
