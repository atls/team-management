'use client'

import type { OrganizationDataType } from '@globals/interfaces'

import { useTheme }                  from '@emotion/react'

import React                         from 'react'
import { FC }                        from 'react'
import { memo }                      from 'react'
import { useState }                  from 'react'
import { useEffect }                 from 'react'

import { OrganizationCard }          from '@app/organization-card-fragment'
import { GridAutoRows }              from '@ui/layout'
import { ThemeType }                 from '@ui/theme'
import { useToast }                  from '@ui/toast-notification'

import { getOrganizationsData }      from './get-organizations-data.hook.js'

export const OrganizationCardGrid: FC = memo(() => {
  const theme = useTheme() as ThemeType
  const toast = useToast()

  const [organizationsData, setOrganizationsData] = useState<Array<OrganizationDataType>>([])

  useEffect(() => {
    if (!organizationsData.length) {
      getOrganizationsData({
        setOrganizationsData,
        toast,
      })
    }
  }, [toast, organizationsData])

  return (
    <GridAutoRows rowHeight='auto' columns={theme.spaces.s2} maxColumnWidth={theme.spaces.hardcore}>
      {organizationsData.map((organizationData: OrganizationDataType) => (
        <OrganizationCard organizationData={organizationData} />
      ))}
    </GridAutoRows>
  )
})
