import { styleFn } from 'styled-system'

export const baseChildContainerStyles: styleFn = ({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: theme.spaces.tiny,
})

export const shapeChildContainerStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.f9,
})

export const appearanceChildContainerStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.dropdown.childContainer,
  boxShadow: theme.shadows.asphalt,
})
