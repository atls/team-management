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

import { BaseLayoutProps }   from './base-layout.interfaces.js'

export const BaseLayoutClient: FC<PropsWithChildren<BaseLayoutProps>> = ({
  children,
  ...baseLayoutData
}) => {
  const theme: any = useTheme()
  const { name, avatarUrl, email, url: githubUrl } = baseLayoutData

  if (!name || !avatarUrl || !email || !githubUrl) {
    throw new Error('not all data recived')
  }

  return (
    <Row backgroundColor={theme.colors.baseLayout.background}>
      <Sidebar name={name} email={email} src={avatarUrl} githubUrl={githubUrl} />
      <Column alignItems='center' flex={1}>
        <ThemeSelector />
        <Column
          maxWidth={theme.spaces.extraSuperLarge}
          margin={theme.spaces.horizontalAutoMargin}
          gap={theme.spaces.large}
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
