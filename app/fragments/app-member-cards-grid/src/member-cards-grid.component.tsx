'use client'

import type { MemberCardsGridProps }        from './member-cards-grid.interfaces.js'
import type { MemberWithOnbordingDataType } from '@app/member-card'
import type { OrganizationDataType }        from '@globals/data'

import { useTheme }                         from '@emotion/react'

import React                                from 'react'
import { FC }                               from 'react'
import { memo }                             from 'react'
import { useState }                         from 'react'

import { MemberCard }                       from '@app/member-card'
import { GridAutoRows }                     from '@ui/layout'
import { ThemeType }                        from '@ui/theme'
import { useToast }                         from '@stores/toast-notification'

import { MemberCardsGridHook }              from './member-cards-grid.hook.js'

const MemberCardsGrid: FC<MemberCardsGridProps> = memo(({
  organizationsLimit,
  organizationMembersLimit,
}) => {
  const theme = useTheme() as ThemeType
  const toast = useToast()

  const pendingMembersData = []

  const [membersData, setMembersData] = useState<Array<MemberWithOnbordingDataType>>([])
  const [organizationsData, setOrganizationsData] = useState<Array<OrganizationDataType>>([])

  MemberCardsGridHook({
    toast,
    organizationsLimit,
    organizationMembersLimit,
    membersData,
    setMembersData,
    organizationsData,
    setOrganizationsData,
  })

  const timerMilliseconds = 17000

  return (
    <GridAutoRows
      columns={[theme.spaces.s1, theme.spaces.s2, theme.spaces.semiTiny]}
      maxColumnWidth={theme.spaces.largeSemiIncreased}
      gap={theme.spaces.semiLarge}
    >
      {pendingMembersData.map((memberData) => (
        <MemberCard
          memberData={memberData}
          organizationsData={organizationsData}
          timerMilliseconds={timerMilliseconds}
        />
      ))}
      {membersData.map((memberData) => (
        <MemberCard memberData={memberData} organizationsData={organizationsData} />
      ))}
    </GridAutoRows>
  )
})
export { MemberCardsGrid }
