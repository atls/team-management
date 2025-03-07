import type { FC }                    from 'react'
import type { PropsWithChildren }     from 'react'

import type { ContainerProps }        from './image-block.interfaces.js'

import styled                         from '@emotion/styled'
import React                          from 'react'

import { createBaseImageBlockStyles } from './image-block.styles.js'

const Image = styled.img<ContainerProps>(createBaseImageBlockStyles)

export const ImageBlock: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  borderRadius,
  src,
  alt,
}) => (
  <Image borderRadius={borderRadius} src={src} alt={alt}>
    {children}
  </Image>
)
