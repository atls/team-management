import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { ThumbElementProps } from './thumb.interfaces.js'

import { Box }                    from '@atls-ui-parts/layout'
import styled                     from '@emotion/styled'
import React                      from 'react'

import { baseThumbStyles }        from './thumb.styles.js'
import { sizeThumbStyles }        from './thumb.styles.js'
import { shapeThumbStyles }       from './thumb.styles.js'
import { appearanceThumbStyles }  from './thumb.styles.js'

const ThumbElementContainer = styled(Box)<ThumbElementProps>(
  baseThumbStyles,
  sizeThumbStyles,
  shapeThumbStyles,
  appearanceThumbStyles
)

const ThumbElement: FC<PropsWithChildren<ThumbElementProps>> = ({ checked, hover, children }) => (
  <ThumbElementContainer checked={checked} hover={hover}>
    {children}
  </ThumbElementContainer>
)

export { ThumbElement }
