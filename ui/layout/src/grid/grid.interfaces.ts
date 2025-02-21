import type { BoxProps }      from '@atls-ui-parts/layout'
import type { CSSProperties } from 'react'
import type { ReactNode }     from 'react'
import type { JSX }           from 'react'

export interface GridAutoRowsProps extends BoxProps {
  color?: CSSProperties['color']
  children: JSX.Element | ReactNode
  gap?: CSSProperties['gap']
  maxColumnWidth: number
  columns: Array<number> | number
  columnGap?: number
  rowHeight?: CSSProperties['gridTemplateColumns']
}

export interface GridAutoRowsContainerProps extends BoxProps {
  color?: any
  gap?: CSSProperties['gap']
  columnGap?: CSSProperties['columnGap']
  rowHeight?: CSSProperties['gridTemplateColumns']
  gridTemplateColumns?: Array<string> | string
}
