import { styleFn } from 'styled-system'

export const baseChildContainerStyles: styleFn = ({
  theme,
  bottom,
  top,
  left,
  right,
  position,
}) => ({
  position: position ?? 'fixed',
  display: 'flex',
  flexDirection: 'column',
  zIndex: theme.spaces.s1400,
  bottom: bottom ?? theme.spaces.zero,
  top: top ?? theme.spaces.zero,
  left: left ?? theme.spaces.zero,
  right: right ?? theme.spaces.zero,
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
