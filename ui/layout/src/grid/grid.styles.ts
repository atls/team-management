import type { Config }  from 'styled-system'
import type { styleFn } from 'styled-system'

import { system }       from 'styled-system'

const gridAutoRowsConfig: Config = {
  gap: {
    property: 'gap',
    transform: (value) => (typeof value === 'number' ? `${value}px` : value),
  },
  rowHeight: {
    property: 'gridAutoRows',
    transform: (value) => (typeof value === 'number' ? `${value}px` : value),
  },
  gridTemplateColumns: {
    property: 'gridTemplateColumns',
    transform: (value) => (typeof value === 'number' ? `${value}px` : value),
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
