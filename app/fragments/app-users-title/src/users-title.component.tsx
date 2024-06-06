import { useTheme }       from '@emotion/react'

import React              from 'react'
import { useIntl }        from 'react-intl'

import { Button }         from '@ui/button'
import { AddIcon }        from '@ui/icons'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'

import { UserTitleTheme } from './user-title.interface.js'

const UsersTitle: React.FC = () => {
  const { formatMessage } = useIntl()
  const theme: UserTitleTheme = useTheme()

  return (
    <Row maxWidth={theme.spaces?.largeDefaultDecreased} justifyContent='space-between'>
      <Text fontSize='medium.semiIncreased' color={theme.colors?.GRAY_1600}>
        {formatMessage({ id: 'users-ешеду.title' })}
      </Text>
      <Button
        boxShadow={theme.shadows?.black}
        shape='circle'
        size='middlingRoundedPadding'
        variant='whiteBackgroundButton'
      >
        <AddIcon width={theme.spaces?.normalSemiDefault} height={theme.spaces?.normalSemiDefault} />
      </Button>
    </Row>
  )
}

export { UsersTitle }
