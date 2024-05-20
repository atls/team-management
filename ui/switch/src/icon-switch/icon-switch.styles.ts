import { styleFn } from 'styled-system'
import { ifProp }  from 'styled-tools'

const defaultAppearanceHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.iconSwitch.handle.default,
  borderColor: 'transparent',
})

const checkedAppearanceHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.iconSwitch.handle.checked,
  borderColor: 'transparent',
})

export const appearanceHandleStyles = ifProp(
  'checked',
  checkedAppearanceHandleStyles,
  defaultAppearanceHandleStyles
)

export const shapeHandleStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.sizes.iconSwitchHandleWidth,
  height: theme.spaces.sizes.iconSwitchHandleHeight,
})
