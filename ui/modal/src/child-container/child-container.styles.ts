import { styleFn } from 'styled-system'

export const baseChildContainerStyles: styleFn = () => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1400,
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
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
  backgroundColor: 'rgba(255, 255, 255, 1)',
})
