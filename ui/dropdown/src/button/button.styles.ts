import { styleFn } from 'styled-system'
import { prop }    from 'styled-tools'
import { ifProp }  from 'styled-tools'

export const baseButtonStyles: styleFn = ({ theme }) => ({
  cursor: 'pointer',
  borderRadius: theme.radii.f9,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spaces.dropdown.button.gap,
})

export const sizeButtonStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.dropdown.button.width,
  height: theme.spaces.dropdown.button.height,
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
