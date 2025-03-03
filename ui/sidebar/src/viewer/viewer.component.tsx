import type { ThemeType }                       from '@ui/theme'
import type { FC }                              from 'react'

import type { ViewerProps }                     from './viewer.interfaces.js'

import type { ViewerWrapperProps } from './viewer.interfaces.js'

import styled                                   from '@emotion/styled'
import { useContext }                           from 'react'
// @ts-expect-error:next-line
import Link                                     from 'next/link'
import React                                    from 'react'

import { Avatar }                               from '@ui/avatar'
import { Condition }                            from '@ui/condition'
import { LogOutIcon }                           from '@ui/icons'
import { Column }                               from '@ui/layout'
import { Row }                                  from '@ui/layout'
import { Text }                                 from '@ui/text'
import { useTheme }                             from '@emotion/react'

import { SidebarStateContext }                  from '../sidebar.context.js'
import { shapeStyles }                          from './viewer.styles.js'

const ViewerWrapper = styled(Row)<ViewerWrapperProps>(shapeStyles)

export const Viewer: FC<ViewerProps> = ({ name, email, avatarUrl, url }) => {
  const theme = useTheme() as ThemeType
  const isSidebarOpened = useContext(SidebarStateContext)

  return (
    <ViewerWrapper isSidebarOpened={isSidebarOpened}>
      <Condition match={Boolean(avatarUrl)}>
        <Link href={url || '/'} target='_blank'>
          <Avatar image size={40} src={avatarUrl} alt='authentificated user avatar' />
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
