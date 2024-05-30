import { styleFn } from 'styled-system'

export const shapeStyles: styleFn = ({ theme }) => ({
  overflow: 'hidden',
  height: theme.spaces.superBiggest,
  borderRadius: theme.radii.f10,
})

export const appearanceStyles: styleFn = ({ theme }) => ({
  background: theme.backgrounds.darkBlueGradient,
  boxShadow: theme.shadows.diesel,
})

export const baseContentStyles: styleFn = ({ theme }) => ({
  padding: theme.spaces.v14h12,
})

export const shapeContentStyles: styleFn = () => ({
  width: '100%',
})
