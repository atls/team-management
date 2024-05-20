import { styleFn } from 'styled-system'

export const baseBackdropStyles: styleFn = ({ theme }) => ({
  position: theme.spaces.fixed,
  zIndex: -1,
  bottom: theme.spaces.s0,
  top: theme.spaces.s0,
  left: theme.spaces.s0,
  right: theme.spaces.s0,
  backgroundColor: theme.colors.modal.backdrop,
  WebkitTapHighlightColor: 'transparent',
})
