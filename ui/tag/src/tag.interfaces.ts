import * as React from 'react'
export interface TagProps {
  padding?: Record<string, string>
  fontSize?: Record<string, number>
  fontFamily?: Record<string, string> | string
  backgroundColor?: string
  text?: string | null
  children?: React.ReactNode
  width: string
  height: string
  boxShadow: string
  color: string
  borderRadius: string
}
