'use client'

import type { OrganizationDataType }   from '@globals/interfaces'

import { useTheme }                    from '@emotion/react'

import React                           from 'react'
import { FC }                          from 'react'
import { memo }                        from 'react'
import { useState }                    from 'react'
import { useEffect }                   from 'react'
import { useContext }                  from 'react'

import { OrganizationCard }            from '@app/organization-card-fragment'
import { ErrorMessageDispatchContext } from '@ui/error-message'
import { GridAutoRows }                from '@ui/layout'
import { ThemeType }                   from '@ui/theme'

import { getOrganizationsData }        from './get-organizations-data.hook.js'

export const OrganizationCardGrid: FC = memo(() => {
  const theme = useTheme() as ThemeType

  const [organizationsData, setOrganizationsData] = useState<Array<OrganizationDataType>>([])
  const errorMessageDispatch = useContext(ErrorMessageDispatchContext) as VoidFunction

  useEffect(() => {
    if (!organizationsData.length) {
      getOrganizationsData({
        setOrganizationsData,
        errorMessageDispatch,
      })
    }
  }, [errorMessageDispatch, organizationsData])

  return (
    <GridAutoRows rowHeight='auto' columns={theme.spaces.s2} maxColumnWidth={theme.spaces.hardcore}>
      {organizationsData.map((organizationData: OrganizationDataType) => (
        <OrganizationCard organizationData={organizationData} />
      ))}
    </GridAutoRows>
  )
})
