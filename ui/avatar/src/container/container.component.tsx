import styled                from '@emotion/styled'
import { createBaseStyles }  from '@atls-ui-parts/avatar'

import React                 from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'

import { getShapeStyles }    from './shape.styles'

const Container = styled.div<{ size?: number; fontWeight?: number }>(
  createBaseStyles(),
  getShapeStyles
)

export const ContainerWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Container fontWeight={100}>{children}</Container>
)
