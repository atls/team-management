import { Divider as BaseDivider } from '@atls-ui-proto/divider'
import { useTheme }               from '@emotion/react'

import React                      from 'react'
import { FC }                     from 'react'

import { ThemeType }              from '@ui/theme'

import { DividerProps }           from './divider.interfaces.js'

export const Divider: FC<any> = (props) => {
  const { backgroundColor } = props
  const theme = useTheme() as ThemeType
  return <BaseDivider {...props} backgroundColor={backgroundColor || theme.colors.divider} />
}
