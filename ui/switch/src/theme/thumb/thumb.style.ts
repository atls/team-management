import { styleFn } from 'styled-system'
import { ifProp }  from 'styled-tools'

const defaultAppearanceThemeSwitchThumbStyles: styleFn = ({ theme }) => ({
  '& > path': {
    fill: theme.colors.switch.theme.default.thumb,
  },
})

const activeAppearanceThemeSwitchThumbStyles: styleFn = ({ theme }) => ({
  '& > path': {
    fill: theme.colors.switch.theme.checked.thumb,
  },
})

export const appearanceThumbStyles = ifProp(
  'active',
  activeAppearanceThemeSwitchThumbStyles,
  defaultAppearanceThemeSwitchThumbStyles
)

const appearanceBoxHoverStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.theme.hover.thumb,
})

export const appearanceBoxStyles = ifProp({ active: false, hover: true }, appearanceBoxHoverStyles)

export const sizeBoxStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.f24,
})
