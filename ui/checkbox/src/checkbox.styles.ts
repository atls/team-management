import { createBoxShapeStyles }          from '@atls-ui-parts/checkbox'
import { createBoxAppearanceStyles }     from '@atls-ui-parts/checkbox'
import { createCheckBaseStyles }         from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles }   from '@atls-ui-parts/checkbox'
import { createCheckShapeStyles }        from '@atls-ui-parts/checkbox'
import { createContainerBaseStyles }     from '@atls-ui-parts/checkbox'
import { createContainerPositionStyles } from '@atls-ui-parts/checkbox'
import { createLabelAppearanceStyles }   from '@atls-ui-parts/checkbox'
import { createLabelShapeStyles }        from '@atls-ui-parts/checkbox'
import { createLabelPositionStyles }     from '@atls-ui-parts/checkbox'

import { styleFn }                       from 'styled-system'
import { ifProp }                        from 'styled-tools'
import { prop }                          from 'styled-tools'

import { theme }                         from '@ui/theme'

export const boxBaseStyles: styleFn = ({ theme: checkboxTheme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: theme.borders.thin,
  width: theme.spaces.semiMedium,
  height: theme.spaces.semiMedium,
  borderRadius: checkboxTheme.radii.extra,
})

export const boxShapeStyles = createBoxShapeStyles({
  size: theme.spaces.semiMedium,
  borderWidth: theme.spaces.nano,
  borderRadius: theme.radii.extra,
})

export const boxDefaultAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.default.border,
  backgroundColor: theme.colors.checkbox.default.background,
})
export const boxHoverAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.hover.border,
  backgroundColor: theme.colors.checkbox.hover.background,
})
export const boxCheckedAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.checked.border,
  backgroundColor: theme.colors.checkbox.checked.background,
})
export const boxCheckedHoverAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.checkedHover.border,
  backgroundColor: theme.colors.checkbox.checkedHover.background,
})
export const boxDisabledAppearanceStyles = createBoxAppearanceStyles({
  borderColor: theme.colors.checkbox.disabled.border,
  backgroundColor: theme.colors.checkbox.disabled.background,
})
export const boxAppearanceStyles = ifProp(
  prop('disabled', false),
  boxDisabledAppearanceStyles,
  ifProp(
    prop('checked', false),
    ifProp(prop('hover', false), boxCheckedHoverAppearanceStyles, boxCheckedAppearanceStyles),
    ifProp(prop('hover', false), boxHoverAppearanceStyles, boxDefaultAppearanceStyles)
  )
)

export const containerBaseStyles = createContainerBaseStyles()
export const containerPositionStyles = createContainerPositionStyles()

export const labelShapeStyles = createLabelShapeStyles({
  fontFamily: theme.fonts.primary,
})

export const labelAppearanceStyles = createLabelAppearanceStyles({
  fontColor: theme.colors.black,
})
export const labelPositionStyles = createLabelPositionStyles({
  margin: '0',
})

export const checkBaseStyles = createCheckBaseStyles()
export const checkAppearanceStyles = createCheckAppearanceStyles({
  color: theme.colors.checkbox.checked.background,
})
export const checkmarkShapeStyles = createCheckShapeStyles({
  size: theme.spaces.regular,
  borderRadius: theme.radii.zero,
})
export const checkmarkCheckStyles = ifProp(
  'checked',
  {
    display: 'flex',
  },
  { display: 'flex' }
)
