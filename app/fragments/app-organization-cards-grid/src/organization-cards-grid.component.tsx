'use client'

import { FC }                         from 'react'
import { memo }                       from 'react'
import { useState }                   from 'react'
import React                          from 'react'

import { OrganizationCard }           from '@app/organization-card'
import { OrganizationDataType }       from '@globals/data'
import { GridAutoRows }               from '@ui/layout'
import { ThemeType }                  from '@ui/theme'
import { useTheme }                   from '@emotion/react'
import { useToast }                   from '@stores/toast-notification'

import { OrganizationCardsGridHook }  from './organization-cards-grid.hook.js'
import { OrganizationCardsGridProps } from './organization-cards-grid.interfaces.js'

export const OrganizationCardsGrid: FC<OrganizationCardsGridProps> = memo(({
  organizationsLimit,
  organizationMembersLimit,
}) => {
  const theme = useTheme() as ThemeType
  const toast = useToast()

  const [organizationsData, setOrganizationsData] = useState<Array<OrganizationDataType>>([])

  OrganizationCardsGridHook({
    organizationsData,
    organizationsLimit,
    organizationMembersLimit,
    setOrganizationsData,
    toast,
  })

  return (
    <GridAutoRows
      rowHeight='auto'
      columns={[theme.spaces.s1, theme.spaces.s2, theme.spaces.s2]}
      maxColumnWidth={theme.spaces.hardcore}
    >
      {organizationsData.map((organizationData: OrganizationDataType) => (
        <OrganizationCard organizationData={organizationData} />
      ))}
    </GridAutoRows>
  )
})
