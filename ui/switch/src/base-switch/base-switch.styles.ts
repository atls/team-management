import { styleFn } from 'styled-system'

export const appearanceHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.baseSwitch.handle.default,
  borderColor: 'transparent',
})

export const shapeHandleStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.semiModerate,
  height: theme.spaces.micro,
})
