import { Theme } from '@emotion/react'

export interface SidebarProps {
  src?: string
  name?: string
  email?: string
}

export interface SidebarTheme extends Theme {
  space?: {
    full: string
    mediumSemiReduced: number
    t20autob0: string
    normalSemiDefault: number
    normalSemiIncreased: number
    largeSemiDefault: number
    miniReduced: number
    mediumSemiDefault: number
  }
  backgrounds?: {
    divider: string
  }
  fontSizes?: {
    small: {
      semiLarge: number
      default: number
    }
  }
}
