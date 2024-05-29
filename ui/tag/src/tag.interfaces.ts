import { Theme } from '@emotion/react'

export interface TagProps {
  padding?: Record<string, string>
  fontSize?: Record<string, number>
  fontFamily?: Record<string, string> | string
  backgroundColor: string | undefined
  text?: string | null
  width: number | undefined
  height: number | undefined
  boxShadow?: string
  color?: string
  borderRadius?: string
  flexDirection?: string
}

export interface TagTextTheme extends Theme {
  fontWeights?: {
    medium: number
  }
  lineHeights?: {
    default: number
  }
}
