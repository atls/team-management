import { Text as BaseText } from '@atls-ui-parts/text'
import { useTheme }         from '@emotion/react'

import React                from 'react'
import { FC }               from 'react'

import { ThemeType }        from '@ui/theme'

// TODO interface
export const Text: FC<any> = (props) => {
  const { color } = props
  const theme = useTheme() as ThemeType
  return <BaseText color={color || theme.colors.text.primary} {...props} />
}
