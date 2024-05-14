import styled                      from '@emotion/styled'
import { HandleElement }           from '@atls-ui-parts/switch'
import { baseHandleStyles }        from '@atls-ui-parts/switch'
import { useSwitch }               from '@atls-ui-parts/switch'
import { ifDisabledThumbModifier } from '@atls-ui-parts/switch'

import React                       from 'react'
import { useRef }                  from 'react'
import { useHover }                from 'react-laag'

import { IconSwitchProps }         from './icon.interfaces'
import { ThumbElement }            from './thumb/thumb.element'
import { appearanceHandleStyles }  from './icon.styles'
import { shapeHandleStyles }       from './icon.styles'
import { baseThumbStyles }         from './icon.styles'
import { shapeThumbStyles }        from './icon.styles'
import { appearanceThumbStyles }   from './icon.styles'

const Thumb = styled(ThumbElement)<any>(
  baseThumbStyles,
  appearanceThumbStyles,
  shapeThumbStyles,
  ifDisabledThumbModifier()
)

const thumbMotionVariants = {
  visible: {
    left: 2,
  },
  checked: {
    left: 44,
  },
}

const Element = styled(HandleElement)(baseHandleStyles, appearanceHandleStyles, shapeHandleStyles)

const IconSwitch = ({ disabled, checked: defaultValue, onChange, children }: IconSwitchProps) => {
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
      >
        {children}
      </Thumb>
    </Element>
  )
}

export { IconSwitch }
