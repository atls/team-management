import { styleFn }    from 'styled-system'
import { ifProp }     from 'styled-tools'
import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'

export const appearanceDefaultHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.theme.default.background,
  borderColor: 'transparent',
  boxShadow: theme.shadows.black,
})

export const appearanceDefaultDisabledHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.default.disabled.background,
  borderColor: 'transparent',
})

export const appearanceCheckedDisabledHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.toggle.checked.disabled.background,
  borderColor: 'transparent',
})

export const shapeNormalSizeHandleStyles: styleFn = () => ({
  width: 92,
  height: 42,
})

export const shapeNormalSizeThumbStyles: styleFn = () => ({
  width: 12,
  height: 12,
})

export const appearanceHandleStyles = ifProp(
  prop('checked', false),
  ifProp(
    prop('disabled', false),
    appearanceCheckedDisabledHandleStyles,
    appearanceDefaultHandleStyles
  ),
  ifProp(
    prop('disabled', false),
    appearanceDefaultDisabledHandleStyles,
    appearanceDefaultHandleStyles
  )
)

const defaultAppearanceThumbStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.thumb.default,
})

const checkedAppearanceThumbStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.thumb.checked,
})

export const appearanceThumbStyles = ifProp(
  'checked',
  checkedAppearanceThumbStyles,
  defaultAppearanceThumbStyles
)

export const shapeThumbStyles = switchProp(prop('size', 'normal'), {
  normal: shapeNormalSizeThumbStyles,
})

export const shapeHandleStyles = switchProp(prop('size', 'normal'), {
  normal: shapeNormalSizeHandleStyles,
})
