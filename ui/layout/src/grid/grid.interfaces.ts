import { BoxProps }      from '@atls-ui-parts/layout'

import { CSSProperties } from 'react'
import { ReactNode }     from 'react'
import { JSX }           from 'react'

export interface GridAutoRowsProps extends BoxProps {
  color?: CSSProperties['color']
  children: JSX.Element | ReactNode
  gap?: CSSProperties['gap']
  maxColumnWidth: number
  columns: number
  columnGap?: number
  rowHeight?: CSSProperties['gridTemplateColumns']
}

export interface GridAutoRowsContainerProps extends BoxProps {
  color?: any
  gap?: CSSProperties['gap']
  columnGap?: CSSProperties['columnGap']
  rowHeight?: CSSProperties['gridTemplateColumns']
  gridTemplateColumns?: CSSProperties['gridTemplateColumns']
}
