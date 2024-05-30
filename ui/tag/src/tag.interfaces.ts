import { Theme } from '@emotion/react'

export interface TagProps {
  padding?: Record<string, string> | number
  fontSize?: Record<string, number>
  fontFamily?: Record<string, string> | string
  backgroundColor: string | undefined
  text?: string | undefined
  width: number | undefined
  height: number | undefined
  boxShadow?: string
  color?: string
  borderRadius?: string | number
}

export interface TagTextTheme extends Theme {
  fontWeights?: {
    medium: number
  }
  lineHeights?: {
    default: number
  }
}
