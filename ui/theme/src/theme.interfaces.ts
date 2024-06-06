import { lineHeights } from './theme/index.js'
import { radii }       from './theme/index.js'
import { shadows }     from './theme/index.js'
import { space }       from './theme/index.js'
import { spaces }      from './theme/index.js'
import { fontWeights } from './theme/index.js'
import { borders }     from './theme/index.js'
import { colors }      from './theme/index.js'
import { fonts }       from './theme/index.js'
import { fontSizes }   from './theme/index.js'
import { backgrounds } from './theme/index.js'

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
