import type { ThemeType }               from '@ui/theme'
import type { FC }                      from 'react'

import type { RemoveRequestGroupProps } from './remove-request-group.interfaces.js'

import { useTheme }                     from '@emotion/react'
import { FormattedMessage }             from 'react-intl'
import React                            from 'react'

import { Button }                       from '@ui/button'
import { Row }                          from '@ui/layout'
import { Text }                         from '@ui/text'

import { BUTTON_PROPS }                 from './remove-request-group.constants.js'

export const RemoveRequestGroup: FC<RemoveRequestGroupProps> = ({
  organizationLogin,
  changeRemoveRequestStateHandler,
  removeOrganizationHandler,
}) => {
  const theme = useTheme() as ThemeType

  return (
    <Row gap={theme.spaces.tiny} alignItems='center'>
      <Text fontSize='small.increased'>
        <FormattedMessage id='remove-organization-request.text' />
      </Text>
      <Button
        {...BUTTON_PROPS}
        onClick={() => {
          removeOrganizationHandler({ organizationLogin })
        }}
      >
        <Text color={theme.colors.white} style={{ textWrap: 'nowrap' }}>
          <FormattedMessage id='yes' />
        </Text>
      </Button>
      <Button {...BUTTON_PROPS} onClick={changeRemoveRequestStateHandler}>
        <Text color={theme.colors.white} style={{ textWrap: 'nowrap' }}>
          <FormattedMessage id='no' />
        </Text>
      </Button>
    </Row>
  )
}
