import { useTheme }       from '@emotion/react'

import React              from 'react'
import { FC }             from 'react'

import { Avatar }         from '@ui/avatar'
import { Card }           from '@ui/card'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Text }           from '@ui/text'
import { ThemeType }      from '@ui/theme'

import { UserBadgeProps } from './user-badge.interfaces.js'

const UserBadge: FC<UserBadgeProps> = ({ avatar, name, email }) => {
  const theme = useTheme() as ThemeType
  return (
    <Card
      height={theme.spaces.medium}
      width={theme.spaces.largeSemiNormalIncreased}
      borderRadius={theme.spaces.miniIncreased}
      backgroundColor={theme.colors.white}
      alignItems='center'
    >
      <Row alignItems='center' margin={theme.spaces.miniReduced} justifyContent='space-between'>
        <Avatar
          size={theme.spaces.increased}
          image
          notification={false}
          src={avatar}
          alt='avatar'
        />
        <Column>
          <Text fontSize='small.semiLarge'>{name}</Text>
          <Text fontSize='small.default' color='GRAY_1000'>
            {email}
          </Text>
        </Column>
      </Row>
    </Card>
  )
}

export { UserBadge }
