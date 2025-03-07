import type { Config } from 'styled-system'

import { system }      from 'styled-system'

const shadowConfig: Config = {
  boxShadow: {
    property: 'boxShadow',
    transform: (value: number | string) => (typeof value === 'string' ? `${value}` : value),
  },
}

export const ButtonShadow = system(shadowConfig)
