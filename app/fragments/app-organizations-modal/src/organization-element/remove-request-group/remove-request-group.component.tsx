import { useTheme }         from '@emotion/react'

import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'
import { ThemeType }        from '@ui/theme'

import { BUTTON_PROPS }     from './remove-request-group.constants.js'

// TODO interfaces
export const RemoveRequestGroup: FC<any> = ({
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
      <Button {...BUTTON_PROPS} onClick={() => removeOrganizationHandler({ organizationLogin })}>
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
