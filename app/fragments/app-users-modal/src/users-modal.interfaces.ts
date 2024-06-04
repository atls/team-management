import { Theme } from '@emotion/react'

export interface UsersModalProps {
  avatar: string
  name: string
  position: string
  usersCount: number | string
}
export interface UsersModalTheme extends Theme {
  spaces?: {
    nano: number
    increased: number
    micro: number
    miniDefault: number
    bigDecreased: number
    middling: number
    semiTiny: number
    large: number
    largest: number
    miniSemiReduced: number
    minniSemiDefault: number
    normalCount: number
    semiMedium: number
    extraLargeDecreased: number
    largeSemiDefaultIncreased: number
    largeSemiDecreasedDefault: number
    superExtraIncreasedDefault: number
    superPuperExtraIncreased: number
    semiSuperDecreased: number
  }
  colors?: {
    white: string
  }
  backgrounds?: { gray: string }
  shadows?: {
    asphalt: string
  }
}
