import type { BoxProps }       from '@atls-ui-parts/layout'
import type { FC }             from 'react'

import type { DotProps }       from './dot.iterfaces.js'

import { Box }                 from '@atls-ui-parts/layout'
import styled                  from '@emotion/styled'
import React                   from 'react'

import { sizeDotStyles }       from './dot.styles.js'
import { appearanceDotStyles } from './dot.styles.js'

const Dot = styled(Box)<BoxProps>(sizeDotStyles, appearanceDotStyles)

export const DotComponent: FC<DotProps> = ({ count }) =>
  Array.from({ length: count }, (_, index) => <Dot key={index} />)
