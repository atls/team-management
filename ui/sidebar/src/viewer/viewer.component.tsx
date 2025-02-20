import styled                  from '@emotion/styled'
import { FC }                  from 'react'
import { useContext }          from 'react'
// @ts-ignore:next-line
import Link                    from 'next/link'
import React                   from 'react'

import { Avatar }              from '@ui/avatar'
import { Condition }           from '@ui/condition'
import { LogOutIcon }          from '@ui/icons'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'
import { ThemeType }           from '@ui/theme'
import { useTheme }            from '@emotion/react'

import { SidebarStateContext } from '../sidebar.context.js'
import { ViewerProps }         from './viewer.interfaces.js'
import { shapeStyles }         from './viewer.styles.js'

const ViewerWrapper = styled<any>(Row)(shapeStyles)

export const Viewer: FC<ViewerProps> = ({ name, email, avatarUrl, url }) => {
  const theme = useTheme() as ThemeType
  const isSidebarOpened = useContext(SidebarStateContext)

  return (
    <ViewerWrapper isSidebarOpened={isSidebarOpened}>
      <Condition match={Boolean(avatarUrl)}>
        <Link href={url || '/'} target='_blank'>
          <Avatar size={40} src={avatarUrl} image alt='authentificated user avatar' />
        </Link>
      </Condition>

      <Condition match={isSidebarOpened}>
        <Column maxWidth={theme.spaces.giant}>
          <Condition match={Boolean(name)}>
            <Text fontSize='small.semiLarge'>{name}</Text>
          </Condition>

          <Condition match={Boolean(email)}>
            <Text fontSize='small.default' color={theme.colors.sidebar.email} wordBreak='break-all'>
              {email}
            </Text>
          </Condition>
        </Column>
        <Link href='logout'>
          <LogOutIcon width={theme.spaces.large} height={theme.spaces.large} />
        </Link>
      </Condition>
    </ViewerWrapper>
  )
}
