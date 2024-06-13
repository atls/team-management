import { useTheme }       from '@emotion/react'

import React              from 'react'
import { useState }       from 'react'
import { useIntl }        from 'react-intl'

import { AddMemberModal } from '@fragments/add-member-modal'
import { Button }         from '@ui/button'
import { AddIcon }        from '@ui/icons'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'
import { ThemeType }      from '@ui/theme'

const UsersTitle: React.FC = () => {
  const { formatMessage } = useIntl()
  const theme = useTheme() as ThemeType

  const [isAddMemberModalOpen, setAddMemberModalOpen] = useState(false)

  const handlerPlusButtonClick = () => {
    setAddMemberModalOpen(!isAddMemberModalOpen)
  }

  return (
    <Row maxWidth={theme.spaces.largeDefaultDecreased} gap={theme.spaces.largest}>
      <Text fontSize='medium.semiIncreased'>{formatMessage({ id: 'users-title.title' })}</Text>
      <Button
        boxShadow={theme.shadows?.black}
        shape='circle'
        size='middlingRoundedPadding'
        variant='whiteBackgroundButton'
        onClick={handlerPlusButtonClick}
      >
        <AddIcon
          width={theme.spaces.semiRegular}
          height={theme.spaces.semiRegular}
          color={theme.colors.button.whiteBackgroundButton.default.color}
        />
      </Button>
      <AddMemberModal open={isAddMemberModalOpen} onBackdropClick={handlerPlusButtonClick} />
    </Row>
  )
}

export { UsersTitle }
