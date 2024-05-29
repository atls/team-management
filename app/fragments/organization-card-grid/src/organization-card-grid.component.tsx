import styled                        from '@emotion/styled'

import React                         from 'react'
import { FC }                        from 'react'

import { Box }                       from '@ui/layout'

import { OrganizationCardGridProps } from './organization-card-grid.interfaces'
import { baseGridContainerStyles }   from './organization-card-grid.styles'
import { shapeGridContainerStyles }  from './organization-card-grid.styles'

const GridContainer = styled(Box)(baseGridContainerStyles, shapeGridContainerStyles)

export const OrganizationCardGrid: FC<OrganizationCardGridProps> = ({ children }) => (
  <GridContainer>{children}</GridContainer>
)
