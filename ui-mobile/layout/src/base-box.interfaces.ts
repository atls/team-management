import type { ReactNode } from 'react'
import type { ViewProps } from 'react-native'

export interface BaseBoxProps extends ViewProps {
  children?: ReactNode
  flex?: number
  gap?: number
  justifyContent?:
    'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly'
  alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
  overflow?: 'auto' | 'hidden'
}
