import { Theme } from '@emotion/react'

export interface UserCardTheme extends Theme {
  space?: {
    largeIncreased: number
    largeSemiIncreased: number
    mediumReduced: number
    mediumSemiIncreased: number
    largeReduced: number
  }
  backgrounds?: {
    darkGray: string
    white: string
  }
  shadows?: {
    nero: string
  }
  radii: {
    f24: number
    f7: number
    f19: number
  }
}
