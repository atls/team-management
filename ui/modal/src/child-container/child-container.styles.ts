import { styleFn } from 'styled-system'

export const baseChildContainerStyles: styleFn = ({ theme }) => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  zIndex: theme.spaces.s1400,
  bottom: theme.spaces.zero,
  top: theme.spaces.zero,
  left: theme.spaces.zero,
  right: theme.spaces.zero,
  WebkitTapHighlightColor: 'transparent',
})

export const sizeChildContainerStyles: styleFn = ({ theme }) => ({
  height: 'min-content',
  maxWidth: theme.spaces.fullWidthWithPaddingNormal,
  maxHeight: theme.spaces.fullWidthWithPaddingNormal,
  margin: 'auto',
})

export const appearanceChildContainerStyles: styleFn = ({ theme }) => ({
  boxShadow: theme.shadows.black,
  borderRadius: theme.radii.bigger,
  backgroundColor: theme.colors.modal.childContainer,
})
