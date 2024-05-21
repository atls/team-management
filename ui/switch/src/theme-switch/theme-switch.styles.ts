import { styleFn } from 'styled-system'

export const baseHandleStyles: styleFn = ({ theme }) => ({
  cursor: theme.spaces.pointer,
  display: theme.spaces.flex,
  gap: theme.spaces.s4,
  flexDirection: theme.spaces.row,
  alignItems: theme.spaces.center,
  justifyContent: theme.spaces.center,
})

export const appearanceHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.themeSwitch.handle.background,
  boxShadow: theme.shadows.black,
  border: theme.spaces.none,
})

export const sizeHandleStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.semiGiant,
  height: theme.spaces.semiBig,
})

export const shapeHandleStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.f24,
})
