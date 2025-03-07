import type { ThemeType }         from '@ui/theme'
import type { FC }                from 'react'

import type { DividerProps }      from './divider.interfaces.js'

import { Divider as BaseDivider } from '@atls-ui-proto/divider'
import { useTheme }               from '@emotion/react'
import React                      from 'react'

export const Divider: FC<DividerProps> = (props) => {
  const { backgroundColor } = props
  const theme = useTheme() as ThemeType
  return <BaseDivider {...props} backgroundColor={backgroundColor || theme.colors.divider} />
}
