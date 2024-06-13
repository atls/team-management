import { Divider as BaseDevider } from '@atls-ui-proto/divider'
import { useTheme }               from '@emotion/react'

import React                      from 'react'
import { FC }                     from 'react'

import { ThemeType }              from '@ui/theme'

// TODO interfaces

export const Divider: FC<any> = (props) => {
  const { backgroundColor } = props
  const theme = useTheme() as ThemeType
  return <BaseDevider {...props} backgroundColor={backgroundColor || theme.colors.divider} />
}
