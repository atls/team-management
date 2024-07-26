'use client'

import { OrganizationCard }           from '@app/organization-card'
import { useTheme }                   from '@emotion/react'

import React                          from 'react'
import { FC }                         from 'react'
import { memo }                       from 'react'
import { useState }                   from 'react'
import { useEffect }                  from 'react'

import { OrganizationDataType }       from '@globals/data'
import { GridAutoRows }               from '@ui/layout'
import { ThemeType }                  from '@ui/theme'
import { useToast }                   from '@stores/toast-notification'

import { OrganizationCardsGridProps } from './organization-cards-grid.interfaces.js'
import { getOrganizationsData }       from './hooks/index.js'

export const OrganizationCardsGrid: FC<OrganizationCardsGridProps> = memo(({
  organizationsLimit,
  organizationMembersLimit,
}) => {
  const theme = useTheme() as ThemeType
  const toast = useToast()

  const [organizationsData, setOrganizationsData] = useState<Array<OrganizationDataType>>([])

  // TODO move to hook
  useEffect(() => {
    if (!organizationsData.length) {
      getOrganizationsData({
        organizationsLimit,
        organizationMembersLimit,
        setOrganizationsData,
        toast,
      })
    }
  }, [toast, organizationsData])

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
