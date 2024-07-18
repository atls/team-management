import React      from 'react'

import { Button } from '@ui/button'
import { Text }   from '@ui/text'

export const ModalButton = ({
  theme,
  formatMessage,
  modalButtonState,
  inviteButtonClickHandler,
}) => {
  return modalButtonState === 'successed' ? (
    <Button
      horizontalLocation='right'
      hover={false}
      variant='whiteBackgroundButton'
      size='middlingRoundedPadding'
    >
      <Text fontSize='normal.semiDefault' fontWeight='normal' color={theme.colors.BLUE_400}>
        {formatMessage({ id: 'add-member-to-organization-modal.success-button' })}
      </Text>
    </Button>
  ) : (
    <Button
      disabled={modalButtonState === 'disabled'}
      horizontalLocation='right'
      variant='blueBackgroundButton'
      size='middlingRoundedPadding'
      onClick={inviteButtonClickHandler}
    >
      <Text fontSize='normal.semiDefault' fontWeight='normal' color={theme.colors.white}>
        {formatMessage({ id: 'add-member-to-organization-modal.button' })}
      </Text>
    </Button>
  )
}
