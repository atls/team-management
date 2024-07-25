'use client'

import { useTheme }                 from '@emotion/react'

import React                        from 'react'
import { FC }                       from 'react'
import { FormattedMessage }         from 'react-intl'

import { Button }                   from '@ui/button'
import { SuccessIcon }              from '@ui/icons'
import { Text }                     from '@ui/text'
import { ThemeType }                from '@ui/theme'

import { InviteButtonProps }        from './invite-button.interfaces.js'
import { getInviteButtonConstants } from './invite-button.constants.js'

export const InviteButton: FC<InviteButtonProps> = ({
  inviteButtonState,
  inviteButtonClickHandler,
}) => {
  const theme = useTheme() as ThemeType

  const { SUCCESS_COLOR, ICON_SIZE } = getInviteButtonConstants(theme)

  return inviteButtonState === 'successed' ? (
    <Button
      horizontalLocation='right'
      hoverDisabled
      variant='whiteBackgroundButton'
      size='middlingRoundedPadding'
    >
      <SuccessIcon width={ICON_SIZE} height={ICON_SIZE} color={SUCCESS_COLOR} />
      <Text fontSize='normal.semiDefault' fontWeight='normal' color={SUCCESS_COLOR}>
        <FormattedMessage id='add-member-to-organization-modal.success-button' />
      </Text>
    </Button>
  ) : (
    <Button
      disabled={inviteButtonState === 'disabled'}
      horizontalLocation='right'
      variant='blueBackgroundButton'
      size='middlingRoundedPadding'
      onClick={inviteButtonClickHandler}
    >
      <Text fontSize='normal.semiDefault' fontWeight='normal' color={theme.colors.white}>
        <FormattedMessage id='add-member-to-organization-modal.button' />
      </Text>
    </Button>
  )
}
