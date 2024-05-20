import { styleFn } from 'styled-system'
import { ifProp }  from 'styled-tools'

export const baseThumbStyles: styleFn = ({ theme }) => ({
  display: theme.spaces.flex,
  alignItems: theme.spaces.center,
  justifyContent: theme.spaces.center,
})

export const shapeThumbStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.f24,
})

export const sizeThumbStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.sizes.themeSwitchThumbWidth,
  height: theme.spaces.sizes.themeSwitchThumbHeight,
})

const defaultAppearanceThumbStyles: styleFn = ({ theme }) => ({
  '& path': {
    fill: theme.colors.switch.themeSwitch.thumb.default,
  },
})

const checkedAppearanceThumbStyles: styleFn = ({ theme }) => ({
  '& path': {
    fill: theme.colors.switch.themeSwitch.thumb.checked,
  },
})

const hoverAppearanceThumbStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.themeSwitch.thumb.hover,
  '& path': {
    fill: theme.colors.switch.themeSwitch.thumb.default,
  },
})

export const appearanceThumbStyles = ifProp(
  'checked',
  checkedAppearanceThumbStyles,
  ifProp('hover', hoverAppearanceThumbStyles, defaultAppearanceThumbStyles)
)
