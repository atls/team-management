import { createAppearanceStyles } from '@atls-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearanceTransparentBackgroundButtonDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundButton.default.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundButton.default.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundButton.default.border'),
})

const appearanceTransparentBackgroundButtonHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundButton.hover.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundButton.hover.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundButton.hover.border'),
})

const appearanceTransparentBackgroundButtonPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundButton.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundButton.pressed.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundButton.pressed.border'),
})

const appearanceTransparentBackgroundButtonDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundButton.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundButton.disabled.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundButton.disabled.border'),
})

const appearanceBlackBackgroundButtonDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blackBackgroundButton.default.font'),
  backgroundColor: prop('theme.colors.button.blackBackgroundButton.default.background'),
  borderColor: prop('theme.colors.button.blackBackgroundButton.default.border'),
})

const appearanceBlackBackgroundButtonHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blackBackgroundButton.hover.font'),
  backgroundColor: prop('theme.colors.button.blackBackgroundButton.hover.background'),
  borderColor: prop('theme.colors.button.blackBackgroundButton.hover.border'),
})

const appearanceBlackBackgroundButtonPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blackBackgroundButton.pressed.font'),
  backgroundColor: prop('theme.colors.button.blackBackgroundButton.pressed.background'),
  borderColor: prop('theme.colors.button.blackBackgroundButton.pressed.border'),
})

const appearanceBlackBackgroundButtonDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blackBackgroundButton.disabled.font'),
  backgroundColor: prop('theme.colors.button.blackBackgroundButton.disabled.background'),
  borderColor: prop('theme.colors.button.blackBackgroundButton.disabled.border'),
})

const appearanceWhiteBackgroundButtonDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.whiteBackgroundButton.default.font'),
  backgroundColor: prop('theme.colors.button.whiteBackgroundButton.default.background'),
  borderColor: prop('theme.colors.button.whiteBackgroundButton.default.border'),
})

const appearanceWhiteBackgroundButtonHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.whiteBackgroundButton.hover.font'),
  backgroundColor: prop('theme.colors.button.whiteBackgroundButton.hover.background'),
  borderColor: prop('theme.colors.button.whiteBackgroundButton.hover.border'),
})

const appearanceWhiteBackgroundButtonPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.whiteBackgroundButton.pressed.font'),
  backgroundColor: prop('theme.colors.button.whiteBackgroundButton.pressed.background'),
  borderColor: prop('theme.colors.button.whiteBackgroundButton.pressed.border'),
})

const appearanceWhiteBackgroundButtonDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.whiteBackgroundButton.disabled.font'),
  backgroundColor: prop('theme.colors.button.whiteBackgroundButton.disabled.background'),
  borderColor: prop('theme.colors.button.whiteBackgroundButton.disabled.border'),
})

const appearanceBlueBackgroundButtonDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blueBackgroundButton.default.font'),
  backgroundColor: prop('theme.colors.button.blueBackgroundButton.default.background'),
  borderColor: prop('theme.colors.button.blueBackgroundButton.default.border'),
})

const appearanceBlueBackgroundButtonHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blueBackgroundButton.hover.font'),
  backgroundColor: prop('theme.colors.button.blueBackgroundButton.hover.background'),
  borderColor: prop('theme.colors.button.blueBackgroundButton.hover.border'),
})

const appearanceBlueBackgroundButtonPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blueBackgroundButton.pressed.font'),
  backgroundColor: prop('theme.colors.button.blueBackgroundButton.pressed.background'),
  borderColor: prop('theme.colors.button.blueBackgroundButton.pressed.border'),
})

const appearanceBlueBackgroundButtonDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blueBackgroundButton.disabled.font'),
  backgroundColor: prop('theme.colors.button.blueBackgroundButton.disabled.background'),
  borderColor: prop('theme.colors.button.blueBackgroundButton.disabled.border'),
})

const appearanceLightBlueBackgroundButtonDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightBlueBackgroundButton.default.font'),
  backgroundColor: prop('theme.colors.button.lightBlueBackgroundButton.default.background'),
  borderColor: prop('theme.colors.button.lightBlueBackgroundButton.default.border'),
})

const appearanceLightBlueBackgroundButtonHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightBlueBackgroundButton.hover.font'),
  backgroundColor: prop('theme.colors.button.lightBlueBackgroundButton.hover.background'),
  borderColor: prop('theme.colors.button.lightBlueBackgroundButton.hover.border'),
})

const appearanceLightBlueBackgroundButtonPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightBlueBackgroundButton.pressed.font'),
  backgroundColor: prop('theme.colors.button.lightBlueBackgroundButton.pressed.background'),
  borderColor: prop('theme.colors.button.lightBlueBackgroundButton.pressed.border'),
})

const appearanceLightBlueBackgroundButtonDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightBlueBackgroundButton.disabled.font'),
  backgroundColor: prop('theme.colors.button.lightBlueBackgroundButton.disabled.background'),
  borderColor: prop('theme.colors.button.lightBlueBackgroundButton.disabled.border'),
})

const appearanceLightBlueBackgroundDottedButtonDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.default.font'),
  backgroundColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.default.background'),
  borderColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.default.border'),
})

const appearanceLightBlueBackgroundDottedButtonHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.hover.font'),
  backgroundColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.hover.background'),
  borderColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.hover.border'),
})

const appearanceLightBlueBackgroundDottedButtonPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.pressed.font'),
  backgroundColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.pressed.background'),
  borderColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.pressed.border'),
})

const appearanceLightBlueBackgroundDottedButtonDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.disabled.font'),
  backgroundColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.disabled.background'),
  borderColor: prop('theme.colors.button.lightBlueBackgroundDottedButton.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  transparentBackgroundButton: ifProp(
    prop('disabled', false),
    appearanceTransparentBackgroundButtonDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentBackgroundButtonPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentBackgroundButtonHoverStyles,
        appearanceTransparentBackgroundButtonDefaultStyles
      )
    )
  ),
  blackBackgroundButton: ifProp(
    prop('disabled', false),
    appearanceBlackBackgroundButtonDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceBlackBackgroundButtonPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceBlackBackgroundButtonHoverStyles,
        appearanceBlackBackgroundButtonDefaultStyles
      )
    )
  ),
  whiteBackgroundButton: ifProp(
    prop('disabled', false),
    appearanceWhiteBackgroundButtonDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceWhiteBackgroundButtonPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceWhiteBackgroundButtonHoverStyles,
        appearanceWhiteBackgroundButtonDefaultStyles
      )
    )
  ),
  blueBackgroundButton: ifProp(
    prop('disabled', false),
    appearanceBlueBackgroundButtonDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceBlueBackgroundButtonPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceBlueBackgroundButtonHoverStyles,
        appearanceBlueBackgroundButtonDefaultStyles
      )
    )
  ),
  lightBlueBackgroundButton: ifProp(
    prop('disabled', false),
    appearanceLightBlueBackgroundButtonDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceLightBlueBackgroundButtonPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceLightBlueBackgroundButtonHoverStyles,
        appearanceLightBlueBackgroundButtonDefaultStyles
      )
    )
  ),
  lightBlueBackgroundDottedButton: ifProp(
    prop('disabled', false),
    appearanceLightBlueBackgroundDottedButtonDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceLightBlueBackgroundDottedButtonPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceLightBlueBackgroundDottedButtonHoverStyles,
        appearanceLightBlueBackgroundDottedButtonDefaultStyles
      )
    )
  ),
})

export { appearanceStyles }
