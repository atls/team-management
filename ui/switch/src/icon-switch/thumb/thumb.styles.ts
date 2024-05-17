import { baseThumbStyles as hyperionBaseThumbStyles } from '@atls-ui-parts/switch'

import { styleFn }                                    from 'styled-system'
import { ifProp }                                     from 'styled-tools'

export const baseThumbStyles: styleFn = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...hyperionBaseThumbStyles,
})

export const shapeThumbStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.switch.iconSwitch.thumb,
  height: theme.spaces.switch.iconSwitch.thumb,
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
