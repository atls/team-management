import * as theme                                from './theme'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import React                                     from 'react'

import { GlobalStyles }                          from './global.styles'
// import { ThemeProviderProps }                    from './theme.interfaces'
import { borders }                               from './theme'
import { colors }                                from './theme'
import { spaces }                                from './theme'
import { fontSizes }                             from './theme'
import { fontWeights }                           from './theme'
import { radii }                                 from './theme'
import { backgrounds }                           from './theme'
import { shadows }                                from './theme'

const theme = {
  colors,
  fontSizes,
  fontWeights,
  spaces,
  radii,
  borders,
  backgrounds,
  shadows,
}

export type ThemeType = typeof theme
export const ThemeProvider = ({ children }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
