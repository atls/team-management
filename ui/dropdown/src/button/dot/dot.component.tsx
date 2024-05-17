import styled                  from '@emotion/styled'
import { Box }                 from '@atls-ui-parts/layout'

import React                   from 'react'
import { FunctionComponent }   from 'react'

import { sizeDotStyles }       from './dot.styles'
import { appearanceDotStyles } from './dot.styles'

const Dot = styled(Box)<any>(sizeDotStyles, appearanceDotStyles)

export const DotComponent: FunctionComponent<any> = () => {
  const dotsCount = 3
  return Array(dotsCount).fill(<Dot />)
}
