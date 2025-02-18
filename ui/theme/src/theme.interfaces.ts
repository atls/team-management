import { lightTheme } from './theme/index.js'

export type ThemeVariantType = 'light' | 'dark'

export type ActionType = { type: 'toggle' }

export type ThemeType = typeof lightTheme
