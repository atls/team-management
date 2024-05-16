import React from 'react'

export interface AvatarProps {
  backgroundColor?: string
  borderWidth: number
  borderColor?: string
  size: number
  borderRadius?: number
  padding?: number
  fontColor?: string
  fontWeight?: string
  fontSize?: number
  shape: string
  fontFamily?: string
  textBasedBackground?: string
  contentType: string
  src?: string
  icon?: React.ReactElement
  text?: string
  alt: string
  notification?: boolean
}
