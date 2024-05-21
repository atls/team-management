import { styleFn } from 'styled-system'
import { prop }    from 'styled-tools'
import { ifProp }  from 'styled-tools'

export const baseButtonStyles: styleFn = ({ theme }) => ({
  cursor: theme.spaces.pointer,
  display: theme.spaces.flex,
  justifyContent: theme.spaces.center,
  alignItems: theme.spaces.center,
  borderRadius: theme.radii.f9,
  gap: theme.spaces.s3,
})

export const sizeButtonStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.increased,
  height: theme.spaces.semiModerate,
})

const defaultAppearanceButtonStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.dropdown.button.default,
})

const hoveredAppearanceButtonStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.dropdown.button.hover,
  boxShadow: theme.shadows.dropdownButton,
})

const pressedAppearanceButtonStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.dropdown.button.pressed,
  boxShadow: theme.shadows.dropdownButton,
})

export const appearanceButtonStyles = ifProp(
  prop('pressed', false),
  pressedAppearanceButtonStyles,
  ifProp(prop('hover', false), hoveredAppearanceButtonStyles, defaultAppearanceButtonStyles)
)
