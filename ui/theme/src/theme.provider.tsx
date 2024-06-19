import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import React                                     from 'react'
import { useReducer }                            from 'react'

import { GlobalStyles }                          from './global.styles.js'
import { ActiveThemeContext }                    from './theme.context.js'
import { ActiveThemeDispatchContext }            from './theme.context.js'
import { activeThemeReducer }                    from './theme.reducer.js'
import { lightTheme }                            from './theme/index.js'

export const ThemeProvider = ({ children }) => {
  const [activeTheme, activeThemeDispatch] = useReducer(activeThemeReducer, lightTheme)

  return (
    <>
      <GlobalStyles />
      <ActiveThemeContext.Provider value={activeTheme}>
        <ActiveThemeDispatchContext.Provider value={activeThemeDispatch}>
          <EmotionThemeProvider theme={activeTheme}>{children}</EmotionThemeProvider>
        </ActiveThemeDispatchContext.Provider>
      </ActiveThemeContext.Provider>
    </>
  )
}
