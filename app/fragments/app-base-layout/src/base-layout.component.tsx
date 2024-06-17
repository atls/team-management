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

export const BaseLayout: FC<PropsWithChildren<BaseLayoutProps>> = ({
  children,
  name,
  email,
  avatar,
}) => {
  const theme: any = useTheme()
  return (
    <Row backgroundColor={theme.backgrounds.main}>
      <Sidebar name={name} email={email} src={avatar} />
      <Column alignItems='center' flex={1}>
        <ThemeSelector />
        <Column
          maxWidth={theme.spaces.extraSuperLarge}
          margin={theme.spaces.horizontalAutoMargin}
          minHeight={theme.spaces.fullVh}
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
