import type { Config }            from 'styled-system'
import type { styleFn }           from 'styled-system'

import type { TransformFunction } from './grid.interfaces.js'

import { system }                 from 'styled-system'

const gridAutoRowsConfig: Config = {
  gap: {
    property: 'gap',
    transform: (value) => (typeof value === 'number' ? `${value}px` : value) as TransformFunction,
  },
  rowHeight: {
    property: 'gridAutoRows',
    transform: (value) => (typeof value === 'number' ? `${value}px` : value) as TransformFunction,
  },
  gridTemplateColumns: {
    property: 'gridTemplateColumns',
    transform: (value) => (typeof value === 'number' ? `${value}px` : value) as TransformFunction,
  },
}

export const baseGridAutoRowsStyles: styleFn = ({ theme, gap }) => ({
  display: 'grid',
  gap: gap ?? theme.spaces.semiLarge,
  gridAutoFlow: 'row',
  alignContent: 'center',
  justifyContent: 'center',
})

export const gridAutoRowsStyles = system(gridAutoRowsConfig)
