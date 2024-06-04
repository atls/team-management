import { Theme } from '@emotion/react'

export interface NotificationsModalProps {
  avatar: string
  name: string
  date: string
}
export interface NotificationsModalTheme extends Theme {
  spaces?: {
    nano: number
    superBiggest: number
    micro: number
    tiny: number
    minniSemiDefault: number
    s5: number
    largeSemiDecreased: number
    largeDefaultIncreased: number
    bigDecreased: number
    largeSemiLargeIncreased: number
  }
  colors?: {
    white: string
  }
  backgrounds?: { gray: string }
}
