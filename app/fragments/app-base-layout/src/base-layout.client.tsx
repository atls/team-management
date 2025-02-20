'use client'

import type { GetViewerQuery } from '@globals/data'

import { FC }                  from 'react'
import { PropsWithChildren }   from 'react'
import React                   from 'react'

import { ThemeSelector }       from '@app/theme-selector'
import { UsersTitle }          from '@app/users-title'
import { Row }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Sidebar }             from '@ui/sidebar'
import { useTheme }            from '@emotion/react'

import { BaseLayoutProps }     from './base-layout.interfaces.js'

export const BaseLayoutClient: FC<PropsWithChildren<BaseLayoutProps>> = ({
  children,
  ...baseLayoutData
}) => {
  const theme: any = useTheme()
  const { name, avatarUrl, email, url } = baseLayoutData as GetViewerQuery['viewer']

  return (
    <Row backgroundColor={theme.colors.baseLayout.background}>
      <Sidebar name={name} email={email} avatarUrl={avatarUrl} url={url} />
      <Column alignItems='center' flex={1}>
        <ThemeSelector />
        <Column
          maxWidth={theme.spaces.extraSuperLarge}
          margin={theme.spaces.horizontalAutoMargin}
          gap={theme.spaces.large}
          padding={theme.spaces.t0h24b128}
          justifyContent='flex-start'
          alignItems='flex-start'
        >
          <UsersTitle />
          {children}
        </Column>
      </Column>
    </Row>
  )
}
