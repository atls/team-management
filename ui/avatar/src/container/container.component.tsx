import styled                from '@emotion/styled'

import React                 from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'

import { AvatarShapeStyles } from '../styles/shape'
import { ContainerProps }    from './container.interfaces'
import { createBaseStyles }  from '../styles/base'
import { getShapeStyles }    from '../styles/shape'

const Container = styled.div<AvatarShapeStyles>(createBaseStyles, getShapeStyles)

export const ContainerWrapper: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  size,
  borderWidth,
  padding,
  borderRadius,
}) => (
  <Container size={size} borderRadius={borderRadius} borderWidth={borderWidth} padding={padding}>
    {children}
  </Container>
)
