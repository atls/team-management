import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { Row }               from '@ui/layout'
import { BaseSwitch }        from '@ui/switch'
import { Text }              from '@ui/text'

import { TeamSwitchProps }   from './team-swtich.interfaces'

export const TeamSwitch: FC<PropsWithChildren<TeamSwitchProps>> = ({ teamName }) => (
  <Row justifyContent='space-between' alignItems='center' width={245}>
    <Text fontSize='normal.semiDefault'>{teamName}</Text>
    <BaseSwitch />
  </Row>
)
