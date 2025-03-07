import type { ThemeType }    from '@ui/theme'

import { useTheme }          from '@emotion/react'
import { FormattedMessage }  from 'react-intl'
import { useState }          from 'react'
import React                 from 'react'

import { InviteMemberModal } from '@app/invite-member-modal-fragment'
import { Button }            from '@ui/button'
import { AddIcon }           from '@ui/icons'
import { Row }               from '@ui/layout'
import { Text }              from '@ui/text'

const UsersTitle: React.FC = () => {
  const theme = useTheme() as ThemeType

  const [isInviteMemberModalOpen, setIsInviteMemberModalOpen] = useState(false)

  const handlerPlusButtonClick = (): void => {
    setIsInviteMemberModalOpen(!isInviteMemberModalOpen)
  }

  return (
    <Row maxWidth={theme.spaces.largeDefaultDecreased} gap={theme.spaces.largest}>
      <Text fontSize='medium.semiIncreased'>
        <FormattedMessage id='users-title.title' />
      </Text>
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
          color={theme.colors.text.primary}
        />
      </Button>
      <InviteMemberModal open={isInviteMemberModalOpen} onBackdropClick={handlerPlusButtonClick} />
    </Row>
  )
}

export { UsersTitle }
