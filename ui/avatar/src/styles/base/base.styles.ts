import { styleFn } from 'styled-system'

import { theme }   from '@ui/theme'

export const createBaseStyles: styleFn = () => () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  padding: theme.space.none,
  margin: theme.space.none,
  position: 'relative',
  overflow: 'hidden',
  borderStyle: 'solid',
  boxSizing: 'border-box',
})
