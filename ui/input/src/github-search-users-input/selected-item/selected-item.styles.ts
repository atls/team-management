import { styleFn } from 'styled-system'

export const baseSelectedItemBoxStyles: styleFn = ({ theme }) => ({
  cursor: 'pointer',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spaces.miniTiny,
})

export const shapeSelectedItemBoxStyles: styleFn = ({ theme }) => ({
  width: 'auto',
  borderRadius: theme.radii.f4,
  padding: theme.spaces.s4,
})

export const appearanceSelectedItemBoxStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.selectInput.selectedItem,
})
