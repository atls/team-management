import type { FC }               from 'react'

import type { ThumbProps }       from './thumb.interfaces.js'

import styled                    from '@emotion/styled'
import React                     from 'react'

import { ThumbElement }          from './thumb.element.js'
import { baseThumbStyles }       from './thumb.styles.js'
import { shapeThumbStyles }      from './thumb.styles.js'
import { appearanceThumbStyles } from './thumb.styles.js'

const Thumb = styled(ThumbElement)<ThumbProps>(
  baseThumbStyles,
  shapeThumbStyles,
  appearanceThumbStyles
)

export const ThumbComponent: FC<ThumbProps> = ({ checked }) => <Thumb checked={checked} />
