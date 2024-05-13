import { styleFn }    from 'styled-system'
import { ifProp }     from 'styled-tools'
import { switchProp } from 'styled-tools'
import { prop }       from 'styled-tools'

export const appearanceDefaultHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.icon.default.background,
  borderColor: 'transparent',
})

export const appearanceDefaultHoverHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.icon.default.background,
  borderColor: 'transparent',
})

export const appearanceDefaultDisabledHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.icon.default.background,
  borderColor: 'transparent',
})

export const appearanceCheckedHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.icon.checked.background,
  borderColor: 'transparent',
})

export const appearanceCheckedHoverHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.switch.icon.checked.background,
  borderColor: 'transparent',
})

export const appearanceCheckedDisabledHandleStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.toggle.checked.disabled.background,
  borderColor: 'transparent',
})

export const shapeNormalSizeHandleStyles: styleFn = () => ({
  width: 70,
  height: 28,
})

export const shapeNormalSizeThumbStyles: styleFn = () => ({
  width: 24,
  height: 24,
})

export const appearanceHandleStyles = ifProp(
  prop('checked', false),
  ifProp(
    prop('disabled', false),
    appearanceCheckedDisabledHandleStyles,
    ifProp(prop('hover', false), appearanceCheckedHoverHandleStyles, appearanceCheckedHandleStyles)
  ),
  ifProp(
    prop('disabled', false),
    appearanceDefaultDisabledHandleStyles,
    ifProp(prop('hover', false), appearanceDefaultHoverHandleStyles, appearanceDefaultHandleStyles)
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
