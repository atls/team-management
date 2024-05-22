import styled                     from '@emotion/styled'
import { HandleElement }          from '@atls-ui-parts/switch'
import { baseHandleStyles }       from '@atls-ui-parts/switch'
import { useSwitch }              from '@atls-ui-parts/switch'

import React                      from 'react'
import { FC }                     from 'react'
import { useRef }                 from 'react'

import { BaseSwitchProps }        from './base-switch.interfaces'
import { ThumbComponent }         from './thumb/thumb.component'
import { appearanceHandleStyles } from './base-switch.styles'
import { shapeHandleStyles }      from './base-switch.styles'

const BaseSwitchContainer = styled(HandleElement)<any>(
  baseHandleStyles,
  appearanceHandleStyles,
  shapeHandleStyles
)

const BaseSwitch: FC<BaseSwitchProps> = ({ checked: defaultValue, onChange, disabled = false }) => {
  const node = useRef<HTMLButtonElement>(null)
  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    <BaseSwitchContainer ref={node} checked={checked} onClick={setChecked}>
      <ThumbComponent checked={checked} />
    </BaseSwitchContainer>
  )
}

export { BaseSwitch }
