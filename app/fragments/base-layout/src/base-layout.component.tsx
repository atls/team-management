'use client'

import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { ThemeSelector }     from '@app/theme-selector'
import { UsersTitle }        from '@app/users-title'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Sidebar }           from '@ui/sidebar'

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme: any = useTheme()
  return (
    <Row backgroundColor={theme.colors.baseLayout.background}>
      <ThemeSelector />
      <Sidebar src='' />
      <Column
        maxWidth={theme.spaces.extraSuperLarge}
        margin={theme.spaces.horizontalAutoMargin}
        minHeight={theme.spaces.fullVh}
        gap={theme.spaces.large}
        justifyContent='flex-start'
        alignItems='flex-start'
        padding={theme.spaces.normalLayoutPaddings}
      >
        <UsersTitle />
        {children}
      </Column>
    </Row>
  )
}
