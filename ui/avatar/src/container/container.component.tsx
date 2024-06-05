import styled                from '@emotion/styled'

import React                 from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'

import { AvatarShapeStyles } from '../styles/shape/index.js'
import { ContainerProps }    from './container.interfaces.js'
import { createBaseStyles }  from '../styles/base/index.js'
import { getShapeStyles }    from '../styles/shape/index.js'

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
