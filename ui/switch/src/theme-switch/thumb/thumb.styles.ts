import { styleFn } from 'styled-system'
import { ifProp }  from 'styled-tools'

export const baseThumbStyles: styleFn = ({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const shapeThumbStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.f24,
})

export const sizeThumbStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.switch.themeSwitch.thumb.width,
  height: theme.spaces.switch.themeSwitch.thumb.height,
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

// const defaultAppearanceThumbStyles: styleFn = ({theme}) => ({
// 	backgroundColor: theme.colors.switch.thumb.default,
// })
//
// const checkedAppearanceThumbStyles: styleFn = ({theme}) => ({
// 	backgroundColor: theme.colors.switch.thumb.checked,
// })
//
// export const appearanceThumbStyles = ifProp(
// 	'checked',
// 	checkedAppearanceThumbStyles,
// 	defaultAppearanceThumbStyles
// )
//
// export const shapeThumbStyles = switchProp(prop('size', 'normal'), {
// 	normal: shapeNormalSizeThumbStyles,
// })
