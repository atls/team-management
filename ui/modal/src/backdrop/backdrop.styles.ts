import { styleFn } from 'styled-system'

export const baseBackdropStyles: styleFn = ({ theme }) => ({
  ...theme.spaces.modal.backdrop,
  backgroundColor: theme.colors.modal.backdrop,
  WebkitTapHighlightColor: 'transparent',
})
