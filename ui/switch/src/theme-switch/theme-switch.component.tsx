import styled                     from '@emotion/styled'
import { HandleElement }          from '@atls-ui-parts/switch'
import { useSwitch }              from '@atls-ui-parts/switch'

import React                      from 'react'
import { FC }                     from 'react'
import { useRef }                 from 'react'
import { useHover }               from 'react-laag'

import { ThemeSwitchProps }       from './theme-switch.interfaces'
import { ThumbComponent }         from './thumb/thumb.component'
import { baseHandleStyles }       from './theme-switch.styles'
import { sizeHandleStyles }       from './theme-switch.styles'
import { shapeHandleStyles }      from './theme-switch.styles'
import { appearanceHandleStyles } from './theme-switch.styles'

const ThemeSwitchContainer = styled(HandleElement)(
  baseHandleStyles,
  appearanceHandleStyles,
  sizeHandleStyles,
  shapeHandleStyles
)

const ThemeSwitch: FC<ThemeSwitchProps> = ({ disabled, checked: defaultValue, onChange }) => {
  const node = useRef<HTMLButtonElement>(null)
  const [hover, hoverProps] = useHover()
  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    <ThemeSwitchContainer ref={node} onClick={setChecked} hover={hover} {...hoverProps}>
      <ThumbComponent hover={hover} checked={checked} />
    </ThemeSwitchContainer>
  )
}

export { ThemeSwitch }
