import type { FC }                    from 'react'

import type { ThemeSwitchProps }      from './theme-switch.interfaces.js'

import { HandleElement }              from '@atls-ui-parts/switch'
import { useSwitch }                  from '@atls-ui-parts/switch'
import styled                         from '@emotion/styled'
import { useRef }                     from 'react'
import { useContext }                 from 'react'
import { useHover }                   from 'react-laag'
import React                          from 'react'

import { ActiveThemeDispatchContext } from '@ui/theme'

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

  const activeThemeDispatch = useContext(ActiveThemeDispatchContext)

  const changeHandler = (): void => {
    activeThemeDispatch?.({
      type: 'toggle',
    })
    setChecked()
  }

  return (
    <ThemeSwitchContainer ref={node} hover={hover} onClick={changeHandler} {...hoverProps}>
      <ThumbComponent hover={hover} checked={checked} />
    </ThemeSwitchContainer>
  )
}

export { ThemeSwitch }
