import { Divider as BaseDivider } from '@atls-ui-proto/divider'
import { FC }                     from 'react'
import React                      from 'react'

import { ThemeType }              from '@ui/theme'
import { useTheme }               from '@emotion/react'

import { DividerProps }           from './divider.interfaces.js'

export const Divider: FC<DividerProps> = (props) => {
  const { backgroundColor } = props
  const theme = useTheme() as ThemeType
  return <BaseDivider {...props} backgroundColor={backgroundColor || theme.colors.divider} />
}
