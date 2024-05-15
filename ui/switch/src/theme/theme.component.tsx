import styled                      from '@emotion/styled'
import { HandleElement }           from '@atls-ui-parts/switch'
import { baseHandleStyles }        from '@atls-ui-parts/switch'
import { useSwitch }               from '@atls-ui-parts/switch'
import { baseThumbStyles }         from '@atls-ui-parts/switch'
import { ifDisabledThumbModifier } from '@atls-ui-parts/switch'

import React                       from 'react'
import { useRef }                  from 'react'
import { useHover }                from 'react-laag'

import { ThemeSwitchProps }        from './theme.interfaces'
import { ThumbElement }            from './thumb/thumb.element'
import { appearanceHandleStyles }  from './theme.styles'
import { appearanceThumbStyles }   from './theme.styles'
import { shapeThumbStyles }        from './theme.styles'
import { shapeHandleStyles }       from './theme.styles'

const Thumb = styled(ThumbElement)<any>(
  baseThumbStyles,
  appearanceThumbStyles,
  shapeThumbStyles,
  ifDisabledThumbModifier()
)

const Element = styled(HandleElement)(baseHandleStyles, appearanceHandleStyles, shapeHandleStyles)

const ThemeSwitch = ({ disabled, checked: defaultValue, onChange }: ThemeSwitchProps) => {
  const node = useRef<HTMLButtonElement>(null)
  const [hover, hoverProps] = useHover()
  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    <Element ref={node} onClick={setChecked} hover={hover} {...hoverProps}>
      <Thumb hover={hover} disabled={disabled} checked={checked} />
    </Element>
  )
}

export { ThemeSwitch }
