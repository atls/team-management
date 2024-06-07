import { Config } from 'styled-system'
import { system } from 'styled-system'

const flexConfig: Config = {
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

export const flexStyles = system(flexConfig)
