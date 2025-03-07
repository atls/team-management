import type { FC }                               from 'react'
import type { PropsWithChildren }                from 'react'
import type { Reducer }                          from 'react'

import type { ActionType }                       from './theme.interfaces.js'
import type { ThemeType }                        from './theme.interfaces.js'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { useReducer }                            from 'react'
import React                                     from 'react'

import { GlobalStyles }                          from './global.styles.js'
import { ActiveThemeContext }                    from './theme.context.js'
import { ActiveThemeDispatchContext }            from './theme.context.js'
import { activeThemeReducer }                    from './theme.reducer.js'
import { lightTheme }                            from './theme/index.js'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeTheme, activeThemeDispatch] = useReducer<Reducer<ThemeType, ActionType>>(
    activeThemeReducer,
    lightTheme
  )

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
