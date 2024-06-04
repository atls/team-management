import { Theme } from '@emotion/react'

export interface ThemeSelectorTheme extends Theme {
  space?: {
    normalSemiDefault: number
    largeSuper: number
  }

  shadows?: {
    black: string
  }
}
