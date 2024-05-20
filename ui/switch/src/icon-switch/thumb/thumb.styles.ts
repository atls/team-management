import { baseThumbStyles as hyperionBaseThumbStyles } from '@atls-ui-parts/switch'

import { styleFn }                                    from 'styled-system'
import { ifProp }                                     from 'styled-tools'

export const baseThumbStyles: styleFn = ({ theme }) => ({
  display: theme.spaces.flex,
  alignItems: theme.spaces.center,
  justifyContent: theme.spaces.center,
  ...hyperionBaseThumbStyles,
})

export const shapeThumbStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.sizes.iconSwitchThumb,
  height: theme.spaces.sizes.iconSwitchThumb,
})

const defaultAppearanceThumbStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.iconSwitch.thumb.default,
})

const checkedAppearanceThumbStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.iconSwitch.thumb.checked,
})

export const appearanceThumbStyles = ifProp(
  'checked',
  checkedAppearanceThumbStyles,
  defaultAppearanceThumbStyles
)
