import type { styleFn } from 'styled-system'

export const baseStyles: styleFn = () => ({
  overflow: 'hidden',
  flexDirection: 'column',
})

export const shapeStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.f24,
})

export const appearanceStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.white,
  boxShadow: theme.shadows.diesel,
})
