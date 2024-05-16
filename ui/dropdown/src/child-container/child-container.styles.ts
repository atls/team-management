import { styleFn } from 'styled-system'

export const baseChildContainerStyles: styleFn = () => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: 10,
})

export const shapeChildContainerStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.f9,
})

export const appearanceChildContainerStyles: styleFn = ({ theme }) => ({
  backgroundColor: 'white',
  boxShadow: theme.shadows.asphalt,
})
