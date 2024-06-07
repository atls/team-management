import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { Row }               from '@ui/layout'
import { BaseSwitch }        from '@ui/switch'
import { Text }              from '@ui/text'
import { ThemeType }         from '@ui/theme'

import { TeamSwitchProps }   from './team-swtich.interfaces.js'

export const TeamSwitch: FC<PropsWithChildren<TeamSwitchProps>> = ({ teamName, onChange }) => {
  const theme = useTheme() as ThemeType
  return (
    <Row
      justifyContent='space-between'
      alignItems='center'
      width={theme.spaces.superSemiSuperExtra}
    >
      <Text fontSize='normal.semiDefault'>{teamName}</Text>
      <BaseSwitch onChange={onChange} />
    </Row>
  )
}
