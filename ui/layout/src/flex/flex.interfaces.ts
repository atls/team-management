import type { BoxProps }      from '@atls-ui-parts/layout'
import type { CSSProperties } from 'react'

export interface FlexProps extends BoxProps {
  height?: CSSProperties['height']
  gap?: CSSProperties['gap']
  rowGap?: CSSProperties['rowGap']
  columnGap?: CSSProperties['columnGap']
}

export type TransformFunction = (value: number | string) => string
