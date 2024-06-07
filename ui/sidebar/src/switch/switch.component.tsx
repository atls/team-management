import styled                 from '@emotion/styled'

import React                  from 'react'
import { FC }                 from 'react'

import { SwitchWrapperProps } from './switch.interface.js'
import { baseSwitchStyles }   from './switch.styles.js'

const Switch = styled.div(baseSwitchStyles)

export const SwitchWrapper: FC<SwitchWrapperProps> = ({ children, onClick }) => (
  <Switch onClick={onClick}>{children}</Switch>
)
