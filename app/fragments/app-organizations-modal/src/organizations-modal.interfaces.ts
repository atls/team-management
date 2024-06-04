import { Theme } from '@emotion/react'

export interface OrganizationsModalProps {
  organization: string
  img: string
}
export interface OrganizationsModalTheme extends Theme {
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
