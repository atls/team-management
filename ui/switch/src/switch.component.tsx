import styled                      from '@emotion/styled'
import { HandleElement }           from '@atls-ui-parts/switch'
import { baseHandleStyles }        from '@atls-ui-parts/switch'
import { useSwitch }               from '@atls-ui-parts/switch'
import { baseThumbStyles }         from '@atls-ui-parts/switch'
import { ifDisabledThumbModifier } from '@atls-ui-parts/switch'

import React                       from 'react'
import { useRef }                  from 'react'
import { useHover }                from 'react-laag'

import { SwitchProps }             from './switch.interfaces'
import { ThumbElement }            from './thumb/thumb.element'
import { appearanceHandleStyles }  from './switch.styles'
import { appearanceThumbStyles }   from './switch.styles'
import { shapeThumbStyles }        from './switch.styles'
import { shapeHandleStyles }       from './switch.styles'

const Thumb = styled(ThumbElement)<any>(
  baseThumbStyles,
  appearanceThumbStyles,
  shapeThumbStyles,
  ifDisabledThumbModifier()
)

export const thumbMotionVariants = {
  visible: {
    left: 0,
  },
  checked: {
    left: 16,
  },
}

const Element = styled(HandleElement)(baseHandleStyles, appearanceHandleStyles, shapeHandleStyles)

const Switch = ({ disabled, checked: defaultValue, onChange }: SwitchProps) => {
  const node = useRef<HTMLButtonElement>(null)
  const [hover, hoverProps] = useHover()
  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    <Element ref={node} checked={checked} onClick={setChecked} hover={hover} {...hoverProps}>
      <Thumb
        disabled={disabled}
        checked={checked}
        variants={{
          ...thumbMotionVariants,
        }}
      />
    </Element>
  )
}

export { Switch }
