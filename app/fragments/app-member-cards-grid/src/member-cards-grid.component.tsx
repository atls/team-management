'use client'

import type { MemberCardsGridProps } from './member-cards-grid.interfaces.js'

import { useTheme }                  from '@emotion/react'

import React                         from 'react'
import { FC }                        from 'react'
import { memo }                      from 'react'
import { useState }                  from 'react'

import { MemberCard }                from '@app/member-card'
import { GridAutoRows }              from '@ui/layout'
import { ThemeType }                 from '@ui/theme'
import { useToast }                  from '@stores/toast-notification'

import { MemberCardsGridHook }       from './member-cards-grid.hook.js'

const MemberCardsGrid: FC<MemberCardsGridProps> = memo(({
  organizationsLimit,
  organizationMembersLimit,
}) => {
  const theme = useTheme() as ThemeType
  const toast = useToast()

  // TODO interface
  const [membersData, setMembersData] = useState<Array<any>>([])

  MemberCardsGridHook({
    toast,
    membersData,
    organizationsLimit,
    organizationMembersLimit,
    setMembersData,
  })

  // TODO interfaces
  return (
    <GridAutoRows
      columns={[theme.spaces.s1, theme.spaces.s2, theme.spaces.semiTiny]}
      maxColumnWidth={theme.spaces.largeSemiIncreased}
      gap={theme.spaces.semiLarge}
    >
      {membersData.map((memberData) => (
        <MemberCard memberData={memberData} />
      ))}
    </GridAutoRows>
  )
})
export { MemberCardsGrid }
