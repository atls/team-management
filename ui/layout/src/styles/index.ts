import type { CSSProperties } from 'react'
import type { Config }        from 'styled-system'

import { system }             from 'styled-system'

type TransformFunction = (value: number | string) => string

export interface LayoutWithGap {
  gap?: CSSProperties['gap']
  gridTemplateColumns?: CSSProperties['gridTemplateColumns']
  rowGap?: CSSProperties['rowGap']
  columnGap?: CSSProperties['columnGap']
}

const gapConfig: Config = {
  gridTemplateColumns: {
    property: 'gridTemplateColumns',
    transform: ((value): string =>
      typeof value === 'string' ? `${value}` : String(value)) as TransformFunction,
  },
  gap: {
    property: 'gap',
    transform: ((value): string =>
      typeof value === 'number' ? `${value}px` : String(value)) as TransformFunction,
  },
  rowGap: {
    property: 'rowGap',
    transform: ((value): string =>
      typeof value === 'number' ? `${value}px` : String(value)) as TransformFunction,
  },
  columnGap: {
    property: 'columnGap',
    transform: ((value): string =>
      typeof value === 'number' ? `${value}px` : String(value)) as TransformFunction,
  },
}

export interface ColumnWithPosition {
  position?: CSSProperties['position']
}

const positionConfig: Config = {
  position: {
    property: 'position',
    transform: ((value): string =>
      typeof value === 'string' ? `${value}` : String(value)) as TransformFunction,
  },
}

export const gapStyles = system(gapConfig)
export const positionStyles = system(positionConfig)
