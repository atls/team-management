import { styleFn } from 'styled-system'

export const baseChildContainerStyles: styleFn = ({ theme }) => ({
  ...theme.spaces.modal.childContainer,
  WebkitTapHighlightColor: 'transparent',
})

export const sizeChildContainerStyles: styleFn = () => ({
  width: '486px',
  height: 'min-content',
  maxWidth: 'calc(100% - 24px)',
  maxHeight: 'calc(100% - 24px)',
  margin: 'auto',
  padding: '12px 24px',
})

export const appearanceChildContainerStyles: styleFn = ({ theme }) => ({
  boxShadow: theme.shadows.black,
  borderRadius: theme.radii.f24,
  backgroundColor: theme.colors.modal.childContainer,
})
