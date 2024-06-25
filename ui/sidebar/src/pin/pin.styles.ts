import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ theme }) => ({
  cursor: 'pointer',
  zIndex: theme.spaces.s1500,
})

export const shapeStyles: styleFn = ({ theme }) => ({
  alignSelf: 'end',
  marginRight: -16,
})

export const appearanceStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.sidebar.pinBackground,
  boxShadow: theme.shadows.moorena,
  borderRadius: theme.radii.f5,
})
