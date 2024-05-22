import { styleFn } from 'styled-system'

export const baseHandleStyles: styleFn = ({ theme }) => ({
  cursor: 'pointer',
  display: 'flex',
  gap: theme.spaces.s4,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})

export const appearanceHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.themeSwitch.handle.background,
  boxShadow: theme.shadows.black,
  border: 'none',
})

export const sizeHandleStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.semiGiant,
  height: theme.spaces.semiBig,
})

export const shapeHandleStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.f24,
})
