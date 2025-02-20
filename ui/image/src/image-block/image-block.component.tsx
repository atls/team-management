import styled                         from '@emotion/styled'
import { FC }                         from 'react'
import { PropsWithChildren }          from 'react'
import React                          from 'react'

import { ContainerProps }             from './image-block.interfaces.js'
import { createBaseImageBlockStyles } from './image-block.styles.js'

const Image = styled.img<ContainerProps>(createBaseImageBlockStyles())

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
