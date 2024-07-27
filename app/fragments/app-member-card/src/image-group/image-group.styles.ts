import { styleFn } from 'styled-system'

export const imageGroupContainerStyles: styleFn = ({ theme }) => ({
  position: 'relative',
  alignItems: 'flex-end',
  height: theme.spaces.largeDefault,
})

export const frontLayerStyles: styleFn = ({ theme }) => ({
  width: '100%',
  position: 'absolute',
  padding: theme.spaces.large,
  flexDirection: 'column',
  gap: theme.spaces.micro,
})
