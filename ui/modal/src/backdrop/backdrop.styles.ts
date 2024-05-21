import { styleFn } from 'styled-system'

export const baseBackdropStyles: styleFn = ({ theme }) => ({
  position: theme.spaces.fixed,
  zIndex: -1,
  bottom: theme.spaces.zero,
  top: theme.spaces.zero,
  left: theme.spaces.zero,
  right: theme.spaces.zero,
  backgroundColor: theme.colors.modal.backdrop,
  WebkitTapHighlightColor: 'transparent',
})
