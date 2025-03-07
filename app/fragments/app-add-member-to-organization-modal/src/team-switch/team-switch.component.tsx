import type { ThemeType }         from '@ui/theme'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { TeamSwitchProps }   from './team-swtich.interfaces.js'

import { useTheme }               from '@emotion/react'
import React                      from 'react'

import { Row }                    from '@ui/layout'
import { BaseSwitch }             from '@ui/switch'
import { Text }                   from '@ui/text'

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
