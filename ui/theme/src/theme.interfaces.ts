import type { lightTheme } from './theme/index.js'

export type ThemeVariantType = 'dark' | 'light'

export type ActionType = { type: 'toggle' }

export type ThemeType = typeof lightTheme
