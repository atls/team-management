import { baseThumbStyles as hyperionBaseThumbStyles } from '@atls-ui-parts/switch'

import { styleFn }                                    from 'styled-system'
import { ifProp }                                     from 'styled-tools'

export const baseThumbStyles: styleFn = ({ theme }) => ({
  ...hyperionBaseThumbStyles,
})

export const shapeThumbStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.switch.baseSwitch.thumb,
  height: theme.spaces.switch.baseSwitch.thumb,
})

const defaultAppearanceThumbStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.baseSwitch.thumb.default,
})

const checkedAppearanceThumbStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.baseSwitch.thumb.checked,
})

export const appearanceThumbStyles = ifProp(
  'checked',
  checkedAppearanceThumbStyles,
  defaultAppearanceThumbStyles
)
