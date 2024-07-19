'use client'

import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { useIntl }           from 'react-intl'

import { Button }            from '@ui/button'
import { SuccessIcon }       from '@ui/icons'
import { Text }              from '@ui/text'
import { ThemeType }         from '@ui/theme'

import { InviteButtonProps } from './invite-button.interfaces.js'

export const InviteButton: FC<InviteButtonProps> = ({
  inviteButtonState,
  inviteButtonClickHandler,
}) => {
  const theme = useTheme() as ThemeType
  const { formatMessage } = useIntl()

  const SUCCESS_COLOR = theme.colors.BLUE_400
  const ICON_SIZE = theme.spaces.semiRegular

  return inviteButtonState === 'successed' ? (
    <Button
      horizontalLocation='right'
      hoverDisabled
      variant='whiteBackgroundButton'
      size='middlingRoundedPadding'
    >
      <SuccessIcon width={ICON_SIZE} height={ICON_SIZE} color={SUCCESS_COLOR} />
      <Text fontSize='normal.semiDefault' fontWeight='normal' color={SUCCESS_COLOR}>
        {formatMessage({ id: 'add-member-to-organization-modal.success-button' })}
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
        {formatMessage({ id: 'add-member-to-organization-modal.button' })}
      </Text>
    </Button>
  )
}
