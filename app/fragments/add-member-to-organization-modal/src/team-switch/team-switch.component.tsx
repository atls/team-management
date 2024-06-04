import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { Row }               from '@ui/layout'
import { BaseSwitch }        from '@ui/switch'
import { Text }              from '@ui/text'

import { TeamSwitchProps }   from './team-swtich.interfaces'

export const TeamSwitch: FC<PropsWithChildren<TeamSwitchProps>> = ({ teamName, onChange }) => {
  const theme: any = useTheme()
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
