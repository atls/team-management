import { createContext, Dispatch } from 'react'
import { ActionType, ThemeType } from './theme.interfaces.js'

export const ActiveThemeContext = createContext<ThemeType | null>(null)
export const ActiveThemeDispatchContext = createContext<Dispatch<ActionType> | null>(null)
