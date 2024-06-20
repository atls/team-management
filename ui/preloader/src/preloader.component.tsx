import React       from 'react'
import { useIntl } from 'react-intl'

import { Text }    from '@ui/text'

const Preloader = () => {
  const { formatMessage } = useIntl()
  return <Text fontSize='normal.default'>{formatMessage({ id: 'preloader.text' })}</Text>
}
export { Preloader }
