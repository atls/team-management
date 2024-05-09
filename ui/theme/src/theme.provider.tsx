import * as theme                               from './theme'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import React                                    from 'react'

console.log(theme.colors.input)

export const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
)
