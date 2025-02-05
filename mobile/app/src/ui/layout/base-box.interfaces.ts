import { ReactNode } from 'react'
import { ViewProps } from 'react-native'

export interface BaseBoxProps extends ViewProps {
  children?: ReactNode
  flex?: number
  gap?: number
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  overflow?: 'hidden' | 'auto'
}
