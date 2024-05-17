import styled                     from '@emotion/styled'
import { HandleElement }          from '@atls-ui-parts/switch'
import { baseHandleStyles }       from '@atls-ui-parts/switch'
import { useSwitch }              from '@atls-ui-parts/switch'

import React                      from 'react'
import { FC }                     from 'react'
import { useRef }                 from 'react'

import { IconSwitchProps }        from './icon-switch.interfaces'
import { ThumbComponent }         from './thumb/thumb.component'
import { appearanceHandleStyles } from './icon-switch.styles'
import { shapeHandleStyles }      from './icon-switch.styles'

const IconSwitchContainer = styled(HandleElement)(
  baseHandleStyles,
  appearanceHandleStyles,
  shapeHandleStyles
)

const IconSwitch: FC<IconSwitchProps> = ({
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
