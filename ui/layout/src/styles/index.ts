import { CSSProperties } from 'react'
import { Config }        from 'styled-system'
import { system }        from 'styled-system'

export interface LayoutWithGap {
  gap?: CSSProperties['gap']
}

const gapConfig: Config = {
  gap: {
    property: 'gap',
    transform: (value) => (typeof value === 'number' ? `${value}px` : value),
  },
}

export const gapStyles = system(gapConfig)
