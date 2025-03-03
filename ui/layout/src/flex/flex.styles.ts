import type { Config }            from 'styled-system'

import type { TransformFunction } from './flex.interfaces.js'

import { system }                 from 'styled-system'

const flexConfig: Config = {
  gap: {
    property: 'gap',
    transform: ((value): string =>
      typeof value === 'number' ? `${value}px` : value) as TransformFunction,
  },
  rowGap: {
    property: 'rowGap',
    transform: ((value): string =>
      typeof value === 'number' ? `${value}px` : value) as TransformFunction,
  },
  columnGap: {
    property: 'columnGap',
    transform: ((value): string =>
      typeof value === 'number' ? `${value}px` : value) as TransformFunction,
  },
  gridColumn: {
    property: 'gridColumn',
  },
  backgroundColor: {
    property: 'backgroundColor',
  },
  borderRadius: {
    property: 'borderRadius',
  },
}

export const flexStyles = system(flexConfig)
