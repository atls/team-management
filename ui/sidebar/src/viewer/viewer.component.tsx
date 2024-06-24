import styled                  from '@emotion/styled'
import { useTheme }            from '@emotion/react'

import Link                    from 'next/link'
import React                   from 'react'
import { FC }                  from 'react'
import { useContext }          from 'react'

import { Avatar }              from '@ui/avatar'
import { Condition }           from '@ui/condition'
import { LogOutIcon }          from '@ui/icons'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'
import { ThemeType }           from '@ui/theme'

import { SidebarStateContext } from '../sidebar.context.js'
import { ViewerProps }         from './viewer.interfaces.js'
import { ViewerWrapperProps }  from './viewer.interfaces.js'
import { shapeStyles }         from './viewer.styles.js'

// const WrapperElement = styled(Column)(
// )

const ViewerWrapper = styled<any>(Row)(shapeStyles)

// TODO прокинуть url на профиль GH
export const Viewer: FC<ViewerProps> = ({ name, email, avatarSrc }) => {
  const theme = useTheme() as ThemeType
  const isSidebarOpened = useContext(SidebarStateContext)

  return (
    <ViewerWrapper isSidebarOpened={isSidebarOpened}>
      <Link href='/'>
        <Avatar size={40} src={avatarSrc} image={true} alt='authentificated user avatar' />
      </Link>
      <Condition match={isSidebarOpened}>
        <Column maxWidth={theme.spaces.giant}>
          <Text fontSize='small.semiLarge'>{name}</Text>
          <Text fontSize='small.default' color={theme.colors.sidebar.email} wordBreak='break-all'>
            {email}
          </Text>
        </Column>
        <Link href='logout'>
          <LogOutIcon width={theme.spaces.large} height={theme.spaces.large} />
        </Link>
      </Condition>
    </ViewerWrapper>
  )
}
