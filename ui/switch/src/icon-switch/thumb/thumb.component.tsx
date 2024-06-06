import styled                    from '@emotion/styled'

import React                     from 'react'
import { FC }                    from 'react'

import { ThumbElement }          from './thumb.element.js'
import { ThumbProps }            from './thumb.interfaces.js'
import { baseThumbStyles }       from './thumb.styles.js'
import { shapeThumbStyles }      from './thumb.styles.js'
import { appearanceThumbStyles } from './thumb.styles.js'

const Thumb = styled(ThumbElement)<any>(baseThumbStyles, appearanceThumbStyles, shapeThumbStyles)

export const ThumbComponent: FC<ThumbProps> = ({ checked, children }) => (
  <Thumb checked={checked}>{children}</Thumb>
)
