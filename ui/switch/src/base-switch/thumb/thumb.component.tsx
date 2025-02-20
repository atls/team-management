import styled                    from '@emotion/styled'
import { FC }                    from 'react'
import React                     from 'react'

import { ThumbElement }          from './thumb.element.js'
import { ThumbProps }            from './thumb.interfaces.js'
import { baseThumbStyles }       from './thumb.styles.js'
import { shapeThumbStyles }      from './thumb.styles.js'
import { appearanceThumbStyles } from './thumb.styles.js'

const Thumb = styled(ThumbElement)<any>(baseThumbStyles, shapeThumbStyles, appearanceThumbStyles)

export const ThumbComponent: FC<ThumbProps> = ({ checked }) => <Thumb checked={checked} />
