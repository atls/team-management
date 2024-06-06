import { Theme } from '@emotion/react'

export interface OrganizationsModalProps {
  organization: string
  img: string
  open: boolean
}
export interface OrganizationsModalTheme extends Theme {
  spaces?: {
    largeDefaultIncreased: number
    micro: number
    superBiggest: number
    large: number
    superExtraIncreased: number
  }
}
