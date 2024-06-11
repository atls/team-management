import { lineHeights } from './light-theme/index.js'
import { radii }       from './light-theme/index.js'
import { shadows }     from './light-theme/index.js'
import { space }       from './light-theme/index.js'
import { spaces }      from './light-theme/index.js'
import { fontWeights } from './light-theme/index.js'
import { borders }     from './light-theme/index.js'
import { colors }      from './light-theme/index.js'
import { fonts }       from './light-theme/index.js'
import { fontSizes }   from './light-theme/index.js'
import { backgrounds } from './light-theme/index.js'

const theme = {
  backgrounds,
  borders,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  space,
  spaces,
}

export type ThemeType = typeof theme
