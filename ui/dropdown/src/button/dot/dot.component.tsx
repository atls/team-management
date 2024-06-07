import styled                  from '@emotion/styled'
import { Box }                 from '@atls-ui-parts/layout'
import { BoxProps }            from '@atls-ui-parts/layout'

import React                   from 'react'
import { FC }                  from 'react'

import { DotProps }            from './dot.iterfaces.js'
import { sizeDotStyles }       from './dot.styles.js'
import { appearanceDotStyles } from './dot.styles.js'

const Dot = styled(Box)<BoxProps>(sizeDotStyles, appearanceDotStyles)

export const DotComponent: FC<DotProps> = ({ count }) => Array(count).fill(<Dot />)
