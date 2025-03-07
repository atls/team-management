import type { styleFn } from 'styled-system'

export const baseBackdropStyles: styleFn = ({ theme }) => ({
  position: 'fixed',
  zIndex: theme.spaces.s1500,
  bottom: theme.spaces.zero,
  top: theme.spaces.zero,
  left: theme.spaces.zero,
  right: theme.spaces.zero,
  backgroundColor: theme.colors.modal.backdrop,
  WebkitTapHighlightColor: 'transparent',
})
