import styled                    from '@emotion/styled'

import React                     from 'react'
import { FC }                    from 'react'

import { ThumbElement }          from './thumb.element'
import { ThumbProps }            from './thumb.interfaces'
import { baseThumbStyles }       from './thumb.styles'
import { shapeThumbStyles }      from './thumb.styles'
import { appearanceThumbStyles } from './thumb.styles'

const Thumb = styled(ThumbElement)<any>(baseThumbStyles, shapeThumbStyles, appearanceThumbStyles)

export const ThumbComponent: FC<ThumbProps> = ({ checked }) => <Thumb checked={checked} />