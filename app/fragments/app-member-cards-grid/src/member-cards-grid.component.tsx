'use client'

import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import { memo }              from 'react'

import { GridAutoRows }      from '@ui/layout'
import { ThemeType }         from '@ui/theme'

const MemberCardsGrid: FC<PropsWithChildren> = memo(({ children }) => {
  const theme = useTheme() as ThemeType
  return (
    <GridAutoRows
      columns={[theme.spaces.s1, theme.spaces.s2, theme.spaces.semiTiny]}
      maxColumnWidth={theme.spaces.largeSemiIncreased}
      gap={theme.spaces.semiLarge}
    >
      {children}
    </GridAutoRows>
  )
})
export { MemberCardsGrid }
