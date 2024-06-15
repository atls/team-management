import * as theme                                from './theme/index.js'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import React                                     from 'react'

import { GlobalStyles }                          from './global.styles.js'

export const ThemeProvider = ({ children }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
