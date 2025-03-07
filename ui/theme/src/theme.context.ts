import type { Dispatch }   from 'react'

import type { ActionType } from './theme.interfaces.js'
import type { ThemeType }  from './theme.interfaces.js'

import { createContext }   from 'react'

export const ActiveThemeContext = createContext<ThemeType | null>(null)
export const ActiveThemeDispatchContext = createContext<Dispatch<ActionType> | null>(null)
