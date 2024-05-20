import { styleFn } from 'styled-system'

export const baseChildContainerStyles: styleFn = ({ theme }) => ({
  display: theme.spaces.flex,
  flexDirection: theme.spaces.column,
  boxSizing: theme.spaces.borderBox,
  padding: theme.spaces.s10,
})

export const shapeChildContainerStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.f9,
})

export const appearanceChildContainerStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.dropdown.childContainer,
  boxShadow: theme.shadows.asphalt,
})
