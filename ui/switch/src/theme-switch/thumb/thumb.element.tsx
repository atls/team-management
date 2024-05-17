import styled                    from '@emotion/styled'
import { Box }                   from '@atls-ui-parts/layout'

import React                     from 'react'
import { FC }                    from 'react'

import { ThumbElementProps }     from './thumb.interfaces'
import { baseThumbStyles }       from './thumb.styles'
import { sizeThumbStyles }       from './thumb.styles'
import { shapeThumbStyles }      from './thumb.styles'
import { appearanceThumbStyles } from './thumb.styles'

const ThumbElementContainer = styled(Box)<any>(
  baseThumbStyles,
  sizeThumbStyles,
  shapeThumbStyles,
  appearanceThumbStyles
)

const ThumbElement: FC<ThumbElementProps> = ({ checked, hover, children }) => (
  <ThumbElementContainer checked={checked} hover={hover}>
    {children}
  </ThumbElementContainer>
)

export { ThumbElement }
