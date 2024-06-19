import styled                         from '@emotion/styled'
import { HandleElement }              from '@atls-ui-parts/switch'
import { useSwitch }                  from '@atls-ui-parts/switch'

import React                          from 'react'
import { FC }                         from 'react'
import { useRef }                     from 'react'
import { useContext }                 from 'react'
import { useHover }                   from 'react-laag'

import { ActiveThemeDispatchContext } from '@ui/theme'

import { ThemeSwitchProps }           from './theme-switch.interfaces.js'
import { ThumbComponent }             from './thumb/thumb.component.js'
import { baseHandleStyles }           from './theme-switch.styles.js'
import { sizeHandleStyles }           from './theme-switch.styles.js'
import { shapeHandleStyles }          from './theme-switch.styles.js'
import { appearanceHandleStyles }     from './theme-switch.styles.js'

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

  const activeThemeDispatch = useContext(ActiveThemeDispatchContext) as any

  const changeHandler = () => {
    activeThemeDispatch({
      type: 'toggle',
    })
    setChecked()
  }

  return (
    <ThemeSwitchContainer ref={node} onClick={changeHandler} hover={hover} {...hoverProps}>
      <ThumbComponent hover={hover} checked={checked} />
    </ThemeSwitchContainer>
  )
}

export { ThemeSwitch }
