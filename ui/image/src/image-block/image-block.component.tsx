import styled                         from '@emotion/styled'

import React                          from 'react'
import { FC }                         from 'react'
import { PropsWithChildren }          from 'react'

import { ContainerProps }             from './image-block.interfaces'
import { createBaseImageBlockStyles } from './image-block.styles'

export const Image = styled.img<ContainerProps>(createBaseImageBlockStyles())

export const ImageBlock: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  borderRadius,
  src,
}) => (
  <Image borderRadius={borderRadius} src={src}>
    {children}
  </Image>
)
