import type { FC }           from 'react'

import type { MembersProps } from './members.interfaces.js'

import { FormattedPlural }   from 'react-intl'
import { FormattedMessage }  from 'react-intl'
import React                 from 'react'

import { TeamIcon }          from '@ui/icons'
import { Text }              from '@ui/text'
import { Space }             from '@ui/text'

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
