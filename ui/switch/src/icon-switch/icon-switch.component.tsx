import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { IconSwitchProps }   from './icon-switch.interfaces.js'

import { HandleElement }          from '@atls-ui-parts/switch'
import { baseHandleStyles }       from '@atls-ui-parts/switch'
import { useSwitch }              from '@atls-ui-parts/switch'
import styled                     from '@emotion/styled'
import { useRef }                 from 'react'
import React                      from 'react'

import { ThumbComponent }         from './thumb/thumb.component.js'
import { appearanceHandleStyles } from './icon-switch.styles.js'
import { shapeHandleStyles }      from './icon-switch.styles.js'

const IconSwitchContainer = styled(HandleElement)(
  baseHandleStyles,
  appearanceHandleStyles,
  shapeHandleStyles
)

const IconSwitch: FC<PropsWithChildren<IconSwitchProps>> = ({
  disabled = false,
  checked: defaultValue,
  onChange,
  children,
}) => {
  const node = useRef<HTMLButtonElement>(null)
  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    <IconSwitchContainer ref={node} checked={checked} onClick={setChecked}>
      <ThumbComponent checked={checked}>{children}</ThumbComponent>
    </IconSwitchContainer>
  )
}

export { IconSwitch }
