import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Text }             from '@ui/text'

const Preloader = () => (
  <Text fontSize='normal.default'>
    <FormattedMessage id='preloader.text' />
  </Text>
)

export { Preloader }
