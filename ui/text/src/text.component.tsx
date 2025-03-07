import type { ThemeType }         from '@ui/theme'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { TextProps }         from './text.interfaces.js'

import { Text as BaseText }       from '@atls-ui-parts/text'
import { useTheme }               from '@emotion/react'
import React                      from 'react'

export const Text: FC<PropsWithChildren<TextProps>> = ({ color: propsColor, ...props }) => {
  const theme = useTheme() as ThemeType
  const color = (propsColor as string) || theme.colors.text.primary
  return <BaseText color={color} {...props} />
}
