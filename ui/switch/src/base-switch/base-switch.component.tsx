import type { FC }                from 'react'

import type { BaseSwitchProps }   from './base-switch.interfaces.js'

import { HandleElement }          from '@atls-ui-parts/switch'
import { baseHandleStyles }       from '@atls-ui-parts/switch'
import { useSwitch }              from '@atls-ui-parts/switch'
import styled                     from '@emotion/styled'
import { useRef }                 from 'react'
import React                      from 'react'

import { ThumbComponent }         from './thumb/thumb.component.js'
import { appearanceHandleStyles } from './base-switch.styles.js'
import { shapeHandleStyles }      from './base-switch.styles.js'

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
