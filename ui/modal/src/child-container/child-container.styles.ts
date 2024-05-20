import { styleFn } from 'styled-system'

export const baseChildContainerStyles: styleFn = ({ theme }) => ({
  position: theme.spaces.fixed,
  display: theme.spaces.flex,
  flexDirection: theme.spaces.column,
  zIndex: theme.spaces.s1400,
  bottom: theme.spaces.s0,
  top: theme.spaces.s0,
  left: theme.spaces.s0,
  right: theme.spaces.s0,
  WebkitTapHighlightColor: 'transparent',
})

export const sizeChildContainerStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.sizes.modalChildContainerWidth,
  height: theme.spaces.sizes.modalChildContainerHeight,
  maxWidth: theme.spaces.sizes.modalChildContainerMaxWidth,
  maxHeight: theme.spaces.sizes.modalChildContainerMaxHeight,
  margin: theme.spaces.auto,
  padding: theme.spaces.defaultPadding,
})

export const appearanceChildContainerStyles: styleFn = ({ theme }) => ({
  boxShadow: theme.shadows.black,
  borderRadius: theme.radii.f24,
  backgroundColor: theme.colors.modal.childContainer,
})
