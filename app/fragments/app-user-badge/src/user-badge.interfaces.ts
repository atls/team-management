import { Theme } from '@emotion/react'
export interface UserBadgeProps {
  avatar: string
  name: string
  email: string
}
export interface UserBadgeTheme extends Theme {
  space?: {
    largeSemiDefault: number
    miniReduced: number
    mediumSemiDefault: number
    miniIncreased: number
    largeSemiNormalIncreased: number
    medium: number
  }
  colors?: {
    white: string
  }
}
