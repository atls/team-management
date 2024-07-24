import React                from 'react'
import { FC }               from 'react'
import { FormattedPlural }  from 'react-intl'
import { FormattedMessage } from 'react-intl'

import { TeamIcon }         from '@ui/icons'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

import { MembersProps }     from './members.interfaces.js'

export const Members: FC<MembersProps> = ({ quantity }) => (
  <>
    <TeamIcon color='white' />
    <Text fontSize='small.default' color='white'>
      {quantity}
      <Space />
      <FormattedPlural
        value={quantity}
        one={<FormattedMessage id='organization-card_member.one' />}
        other={<FormattedMessage id='organization-card_member.many' />}
      />
    </Text>
  </>
)
