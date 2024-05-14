import { createAppearanceStyles } from '@atls-ui-parts/button'
import { ifProp } from 'styled-tools'
import { switchProp } from 'styled-tools'
import { prop } from 'styled-tools'

const appearanceTransparentBackgroundTestButtonDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundTestButton.default.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundTestButton.default.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundTestButton.default.border'),
})

const appearanceTransparentBackgroundTestButtonHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundTestButton.hover.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundTestButton.hover.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundTestButton.hover.border'),
})

const appearanceTransparentBackgroundTestButtonPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundTestButton.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundTestButton.pressed.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundTestButton.pressed.border'),
})

const appearanceTransparentBackgroundTestButtonDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackgroundTestButton.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparentBackgroundTestButton.disabled.background'),
  borderColor: prop('theme.colors.button.transparentBackgroundTestButton.disabled.border'),
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

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  transparentBackgroundTestButton: ifProp(
    prop('disabled', false),
    appearanceTransparentBackgroundTestButtonDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentBackgroundTestButtonPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentBackgroundTestButtonHoverStyles,
        appearanceTransparentBackgroundTestButtonDefaultStyles
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
})

export { appearanceStyles }
