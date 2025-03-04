import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { ThumbProps }        from './thumb.interfaces.js'

import styled                     from '@emotion/styled'
import React                      from 'react'

import { ThumbElement }           from './thumb.element.js'
import { baseThumbStyles }        from './thumb.styles.js'
import { shapeThumbStyles }       from './thumb.styles.js'
import { appearanceThumbStyles }  from './thumb.styles.js'

const Thumb = styled(ThumbElement)<ThumbProps>(
  baseThumbStyles,
  appearanceThumbStyles,
  shapeThumbStyles
)

export const ThumbComponent: FC<PropsWithChildren<ThumbProps>> = ({ checked, children }) => (
  <Thumb checked={checked}>{children}</Thumb>
)
