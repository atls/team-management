'use client'

import type { MemberWithOrganizationsDataType } from '@app/member-card'
import type { OrganizationDataType }            from '@globals/data'
import type { ThemeType }                       from '@ui/theme'
import type { FC }                              from 'react'

import type { MemberCardsGridProps }            from './use-get-members-data.interfaces.js'

import { memo }                                 from 'react'
import { useState }                             from 'react'
import React                                    from 'react'

import { MemberCard }                           from '@app/member-card'
import { GridAutoRows }                         from '@ui/layout'
import { useTheme }                             from '@emotion/react'
import { useToast }                             from '@stores/toast-notification'

import { MOCK_PENDING_MEMBER_TIMER }            from './member-cards-grid.constants.js'
import { useGetMembersDataHook }                from './use-get-members-data.hook.js'

const MemberCardsGrid: FC<MemberCardsGridProps> = memo(({
  organizationsLimit,
  organizationMembersLimit,
}) => {
  const theme = useTheme() as ThemeType
  const toast = useToast()

  const pendingMembersData: Array<MemberWithOrganizationsDataType> = []

  const [membersData, setMembersData] = useState<Array<MemberWithOrganizationsDataType>>([])
  const [organizationsData, setOrganizationsData] = useState<Array<OrganizationDataType>>([])

  useGetMembersDataHook({
    toast,
    organizationsLimit,
    organizationMembersLimit,
    membersData,
    setMembersData,
    organizationsData,
    setOrganizationsData,
  })

  return (
    <GridAutoRows
      columns={[theme.spaces.s1, theme.spaces.s2, theme.spaces.semiTiny]}
      maxColumnWidth={theme.spaces.largeSemiIncreased}
      gap={theme.spaces.semiLarge}
    >
      {pendingMembersData.map((memberData) => (
        <MemberCard
          key={memberData.id}
          memberData={memberData}
          organizationsData={organizationsData}
          timerMilliseconds={MOCK_PENDING_MEMBER_TIMER}
        />
      ))}
      {membersData.map((memberData) => (
        <MemberCard
          key={memberData.id}
          memberData={memberData}
          organizationsData={organizationsData}
        />
      ))}
    </GridAutoRows>
  )
})
export { MemberCardsGrid }
