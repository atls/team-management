import React                         from 'react'
import { FC }                        from 'react'

import { GridAutoRows }              from '@ui/layout'

import { OrganizationCardGridProps } from './organization-card-grid.interfaces'

export const OrganizationCardGrid: FC<OrganizationCardGridProps> = ({ children }) => (
  <GridAutoRows rowHeight={150} columns={2} maxColumnWidth={620}>
    {children}
  </GridAutoRows>
)
