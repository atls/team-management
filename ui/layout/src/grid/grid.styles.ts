import { Config }  from 'styled-system'
import { styleFn } from 'styled-system'
import { system }  from 'styled-system'

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

export const baseGridAutoRowsStyles: styleFn = ({ theme }) => ({
  display: 'grid',
  gap: theme.spaces.semiLarge,
  gridAutoFlow: 'row',
  alignContent: 'center',
  justifyContent: 'center',
})

export const gridAutoRowsStyles = system(gridAutoRowsConfig)
