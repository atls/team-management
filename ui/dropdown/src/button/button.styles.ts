import type { styleFn } from 'styled-system'

import { prop }         from 'styled-tools'
import { ifProp }       from 'styled-tools'

export const baseButtonStyles: styleFn = ({ theme }) => ({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.radii.f9,
  gap: theme.spaces.semiTiny,
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
  boxShadow: theme.shadows.blackCat,
})

const pressedAppearanceButtonStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.dropdown.button.pressed,
  boxShadow: theme.shadows.blackCat,
})

export const appearanceButtonStyles = ifProp(
  prop('pressed', false),
  pressedAppearanceButtonStyles,
  ifProp(prop('hover', false), hoveredAppearanceButtonStyles, defaultAppearanceButtonStyles)
)
