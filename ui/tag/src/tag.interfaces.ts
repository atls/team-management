import { Theme } from '@emotion/react'

export interface TagProps {
  padding?: Record<string, string>
  fontSize?: Record<string, number>
  fontFamily?: Record<string, string> | string
  backgroundColor: string
  text?: string | null
  width: string
  height: string
  boxShadow?: string
  color?: string
  borderRadius?: string
}

export interface TagTextTheme extends Theme {
  fontWeights?: {
    medium: number
  }
  lineHeights?: {
    default: number
  }
}