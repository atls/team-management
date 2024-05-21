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
  width: theme.spaces.superExtra,
  height: 'min-content',
  maxWidth: theme.spaces.fullWidthWithPaddingNormal,
  maxHeight: theme.spaces.fullWidthWithPaddingNormal,
  margin: 'auto',
  padding: theme.spaces.paddingsNormal,
})

export const appearanceChildContainerStyles: styleFn = ({ theme }) => ({
  boxShadow: theme.shadows.black,
  borderRadius: theme.radii.f24,
  backgroundColor: theme.colors.modal.childContainer,
})
