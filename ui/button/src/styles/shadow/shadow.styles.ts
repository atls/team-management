import { CSSProperties } from 'react'
import { Config }        from 'styled-system'
import { system }        from 'styled-system'

export interface ButtonShadow {
  boxShadow?: CSSProperties['boxShadow']
}

const shadowConfig: Config = {
  boxShadow: {
    property: 'boxShadow',
    transform: (value) => (typeof value === 'string' ? `${value}` : value),
  },
}

export const ButtonShadow = system(shadowConfig)
