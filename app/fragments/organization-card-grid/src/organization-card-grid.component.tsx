import { useTheme }                  from '@emotion/react'

import React                         from 'react'
import { FC }                        from 'react'
import { PropsWithChildren }         from 'react'
import { memo }                      from 'react'

import { GridAutoRows }              from '@ui/layout'
import { ThemeType }                 from '@ui/theme'

import { OrganizationCardGridProps } from './organization-card-grid.interfaces.js'

export const OrganizationCardGrid: FC<PropsWithChildren<OrganizationCardGridProps>> = memo(({
  children,
}) => {
  const theme = useTheme() as ThemeType

  return (
    <GridAutoRows
      // rowHeight={theme.spaces.superBiggest}
      rowHeight='auto'
      columns={theme.spaces.s2}
      maxColumnWidth={theme.spaces.hardcore}
    >
      {children}
    </GridAutoRows>
  )
})
