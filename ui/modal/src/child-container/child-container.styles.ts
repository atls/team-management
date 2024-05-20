import { styleFn } from 'styled-system'

export const baseChildContainerStyles: styleFn = ({ theme }) => ({
  ...theme.spaces.modal.childContainer,
  WebkitTapHighlightColor: 'transparent',
})

const WIDTH = '486px'
const HEIGHT = 'min-content'
const MAX_WIDTH = 'calc(100% - 24px)'
const MAX_HEIGHT = 'calc(100% - 24px)'
export const sizeChildContainerStyles: styleFn = ({ theme }) => ({
  width: WIDTH,
  height: HEIGHT,
  maxWidth: MAX_WIDTH,
  maxHeight: MAX_HEIGHT,
  margin: theme.spaces.modal.childContainer.margin,
  padding: theme.spaces.modal.childContainer.padding,
})

export const appearanceChildContainerStyles: styleFn = ({ theme }) => ({
  boxShadow: theme.shadows.black,
  borderRadius: theme.radii.f24,
  backgroundColor: theme.colors.modal.childContainer,
})
