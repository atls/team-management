import { createContext }           from 'react'

import { Dispatch } from 'react'

import { ActionType }              from './theme.interfaces.js'

import { ThemeType }   from './theme.interfaces.js'

export const ActiveThemeContext = createContext<ThemeType | null>(null)
export const ActiveThemeDispatchContext = createContext<Dispatch<ActionType> | null>(null)
