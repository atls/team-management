import { styleFn } from 'styled-system'

export const baseGridContainerStyles: styleFn = ({ theme }) => ({
  display: 'grid',
  gridAutoRows: 'min-content',
  gridTemplateColumns: 'repeat(2, minmax(auto, 620px))',
  gridAutoFlow: 'row',
  alignContent: 'center',
  justifyContent: 'center',
  // justifyItems: 'center',
  // TODO use theme
  gap: 22,
})

export const shapeGridContainerStyles: styleFn = ({ theme }) => ({
  width: '100%',
  height: '100vh',
})
