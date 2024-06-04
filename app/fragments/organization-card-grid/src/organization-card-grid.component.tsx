import { useTheme }                  from '@emotion/react'

import React                         from 'react'
import { FC }                        from 'react'
import { memo }                      from 'react'

import { GridAutoRows }              from '@ui/layout'

import { OrganizationCardGridProps } from './organization-card-grid.interfaces'

export const OrganizationCardGrid: FC<OrganizationCardGridProps> = memo(({ children }) => {
  const theme: any = useTheme()

  return (
    <GridAutoRows
      rowHeight={theme.spaces.superBiggest}
      columns={theme.spaces.s2}
      maxColumnWidth={theme.spaces.hardcore}
    >
      {children}
    </GridAutoRows>
  )
})
