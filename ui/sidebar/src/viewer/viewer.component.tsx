import { useTheme }   from '@emotion/react'

import Link           from 'next/link'
import React          from 'react'
import { FC }         from 'react'

import { Avatar }     from '@ui/avatar'
import { LogOutIcon } from '@ui/icons'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Text }       from '@ui/text'
import { ThemeType }  from '@ui/theme'

// TODO open/closed
export const Viewer: FC<any> = ({ name, email, avatarSrc }) => {
  const theme = useTheme() as ThemeType

  // TODO прокинуть url на профиль

  return (
    <Row
      gap={theme.spaces.semiMedium}
      padding='0 20px'
      justifyContent='space-between'
      alignItems='center'
    >
      <Link href='/'>
        <Avatar size={40} src={avatarSrc} image={true} />
      </Link>
      <Column maxWidth={theme.spaces.giant}>
        <Text fontSize='small.semiLarge'>{name}</Text>
        <Text fontSize='small.default' color={theme.colors.sidebar.email} wordBreak='break-all'>
          {email}
        </Text>
      </Column>
      <Link href='logout'>
        <LogOutIcon width={theme.spaces.large} height={theme.spaces.large} />
      </Link>
    </Row>
  )
}
