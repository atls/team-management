import { useTheme }  from '@emotion/react'

import React         from 'react'
import { useIntl }   from 'react-intl'

import { Button }    from '@ui/button'
import { AddIcon }   from '@ui/icons'
import { Row }       from '@ui/layout'
import { Text }      from '@ui/text'
import { ThemeType } from '@ui/theme'

const UsersTitle: React.FC = () => {
  const { formatMessage } = useIntl()
  const theme = useTheme() as ThemeType

  return (
    <Row margin={theme.spaces.t44lr0b24} width='auto'>
      <Text
        fontSize='medium.semiIncreased'
        color={theme.colors.GRAY_1600}
        marginRight={theme.spaces.semiModerate}
      >
        {formatMessage({ id: 'users-title.title' })}
      </Text>
      <Button
        boxShadow={theme.shadows.black}
        shape='circle'
        size='middlingRoundedPadding'
        variant='whiteBackgroundButton'
      >
        <AddIcon width={theme.spaces.semiRegular} height={theme.spaces.semiRegular} />
      </Button>
    </Row>
  )
}

export { UsersTitle }
