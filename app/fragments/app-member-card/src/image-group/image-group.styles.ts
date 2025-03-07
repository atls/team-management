import type { styleFn } from 'styled-system'

export const imageGroupContainerStyles: styleFn = ({ theme }) => ({
  position: 'relative',
  alignItems: 'flex-end',
  height: theme.spaces.largeDefault,
})

export const frontLayerStyles: styleFn = ({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  padding: theme.spaces.large,
  backgroundColor: theme.colors.BLACK_40,
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: theme.spaces.micro,
})
