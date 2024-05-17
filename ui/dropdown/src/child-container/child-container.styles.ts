import { styleFn } from 'styled-system'

export const baseChildContainerStyles: styleFn = ({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: theme.spaces.dropdown.childContainer.padding,
})

export const shapeChildContainerStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.f9,
})

export const appearanceChildContainerStyles: styleFn = ({ theme }) => ({
  backgroundColor: 'white',
  boxShadow: theme.shadows.asphalt,
})
