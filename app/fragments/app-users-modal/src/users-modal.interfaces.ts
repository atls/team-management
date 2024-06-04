import { Theme } from '@emotion/react'

export interface UsersModalProps {
  avatar: string
  name: string
  position: string
}
export interface UsersModalTheme extends Theme {
  space?: {
    largeSemiDefault: number
    miniReduced: number
    mediumSemiDefault: number
    miniIncreased: number
    largeSemiNormalIncreased: number
    medium: number
    nano: number
  }
  colors?: {
    white: string
  }
  backgrounds?: { gray: string }
}
