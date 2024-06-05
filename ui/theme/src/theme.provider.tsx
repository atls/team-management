import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import React                                     from 'react'

import { GlobalStyles }                          from './global.styles'
import { backgrounds }                           from './theme'
import { borders }                               from './theme'
import { colors }                                from './theme'
import { fonts }                                 from './theme'
import { fontSizes }                             from './theme'
import { fontWeights }                           from './theme'
import { lineHeights }                           from './theme'
import { radii }                                 from './theme'
import { shadows }                               from './theme'
import { space }                                 from './theme'
import { spaces }                                from './theme'

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

export const ThemeProvider = ({ children }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
