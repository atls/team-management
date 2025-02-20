import type { TextProps }    from './text.interfaces.js'

import { Text as BaseText }  from '@atls-ui-parts/text'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import React                 from 'react'

import { ThemeType }         from '@ui/theme'
import { useTheme }          from '@emotion/react'

export const Text: FC<PropsWithChildren<TextProps>> = ({ color: propsColor, ...props }) => {
  const theme = useTheme() as ThemeType
  const color = (propsColor as string) || (theme.colors.text.primary as string)
  return <BaseText color={color} {...props} />
}
