import { useTheme }       from '@emotion/react'

import React              from 'react'

import { Button }         from '@ui/button'
import { AddIcon }        from '@ui/icons'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'

import { UserTitleTheme } from './user-title.interface'

const UsersTitle: React.FC = () => {
  const theme: UserTitleTheme = useTheme()
  return (
    <Row maxWidth={theme.space?.largeDefaultDecreased} justifyContent='space-between'>
      <Text fontSize='medium.semiIncreased' color={theme.colors?.GRAY_1600}>
        Team members
      </Text>
      <Button
        boxShadow={theme.shadows?.black}
        shape='circle'
        size='middlingRoundedPadding'
        variant='whiteBackgroundButton'
      >
        <AddIcon width={theme.space?.normalSemiDefault} height={theme.space?.normalSemiDefault} />
      </Button>
    </Row>
  )
}

export { UsersTitle }
