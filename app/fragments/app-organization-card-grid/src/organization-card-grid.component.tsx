'use client'

import { useTheme }                    from '@emotion/react'

import React                           from 'react'
import { FC }                          from 'react'
import { memo }                        from 'react'
import { useState }                    from 'react'
import { useEffect }                   from 'react'
import { useContext }                  from 'react'

import { OrganizationCard }            from '@app/organization-card-fragment'
import { GetViewerOrganizationsQuery } from '@globals/data'
import { ErrorMessageDispatchContext } from '@ui/error-message'
import { GridAutoRows }                from '@ui/layout'
import { ThemeType }                   from '@ui/theme'

import { getOrganizationsData }        from './get-organizations-data.hook.js'

export const OrganizationCardGrid: FC = memo(() => {
  const theme = useTheme() as ThemeType

  const [organizationsData, setOrganizationsData] = useState<Array<GetViewerOrganizationsQuery>>([])
  const errorMessageDispatch = useContext(ErrorMessageDispatchContext) as VoindFunction

  useEffect(() => {
    if (!organizationsData.length) {
      //     eslint-disable-next-line react-hooks/exhaustive-deps
      return getOrganizationsData({
        setOrganizationsData,
        errorMessageDispatch,
      })
    }
    return
  }, [])

  return (
    <GridAutoRows rowHeight='auto' columns={theme.spaces.s2} maxColumnWidth={theme.spaces.hardcore}>
      {organizationsData.map((organizationData: OrganizationDataType) => (
        <OrganizationCard organizationData={organizationData} />
      ))}
    </GridAutoRows>
  )
})
