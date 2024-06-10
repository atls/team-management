import { CSSProperties } from 'react'
import { Config }        from 'styled-system'
import { system }        from 'styled-system'

export interface LayoutWithGap {
  gap?: CSSProperties['gap']
  gridTemplateColumns?: CSSProperties['gridTemplateColumns']
  rowGap?: CSSProperties['rowGap']
  columnGap?: CSSProperties['columnGap']
}

const gapConfig: Config = {
  gridTemplateColumns: {
    property: 'gridTemplateColumns',
    transform: (value) => (typeof value === 'string' ? `${value}` : value),
  },
  gap: {
    property: 'gap',
    transform: (value) => (typeof value === 'number' ? `${value}px` : value),
  },
  rowGap: {
    property: 'rowGap',
    transform: (value) => (typeof value === 'number' ? `${value}px` : value),
  },
  columnGap: {
    property: 'columnGap',
    transform: (value) => (typeof value === 'number' ? `${value}px` : value),
  },
}

export interface ColumnWithPosition {
  position?: CSSProperties['position']
}

const positionConfig: Config = {
  position: {
    property: 'position',
    transform: (value) => (typeof value === 'string' ? `${value}` : value),
  },
}

export const gapStyles = system(gapConfig)
export const positionStyles = system(positionConfig)
