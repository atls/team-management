import { styleFn } from 'styled-system'

export const createBaseStyles: styleFn = ({ theme }) => ({
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
