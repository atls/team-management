import { styleFn } from 'styled-system'

export const appearanceHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.baseSwitch.handle.default,
  borderColor: 'transparent',
})

export const shapeHandleStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.switch.baseSwitch.handle.width,
  height: theme.spaces.switch.baseSwitch.handle.height,
})
