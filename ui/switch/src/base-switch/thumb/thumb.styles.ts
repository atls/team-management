import type { styleFn }                               from 'styled-system'

import { baseThumbStyles as hyperionBaseThumbStyles } from '@atls-ui-parts/switch'
import { ifProp }                                     from 'styled-tools'

export const baseThumbStyles: styleFn = ({ theme }) => ({
  ...hyperionBaseThumbStyles,
})

export const shapeThumbStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.micro,
  height: theme.spaces.micro,
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
