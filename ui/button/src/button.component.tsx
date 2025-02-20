import { Content }           from '@atls-ui-parts/button'
import styled                from '@emotion/styled'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'
import { forwardRef }        from 'react'
import { useState }          from 'react'
import React                 from 'react'

import { useHover }          from '@ui/utils'

import { ButtonProps }       from './button.interfaces.js'
import { IconAttachment }    from './icon-attachment/index.js'
import { ButtonShadow }      from './styles/shadow/index.js'
import { baseStyles }        from './button.styles.js'
import { shapeStyles }       from './button.styles.js'
import { contentStyles }     from './button.styles.js'
import { fillStyles }        from './button.styles.js'
import { appearanceStyles }  from './styles/index.js'

export const ButtonElement = styled('button')<any>(
  baseStyles,
  contentStyles,
  shapeStyles,
  appearanceStyles,
  fillStyles,
  ButtonShadow
)

export const Button: FC<PropsWithChildren<ButtonProps>> = forwardRef((
  { children, active, hoverDisabled, ...props },
  ref
) => {
  const [hover, hoverProps] = useHover()
  const [pressed, setPressed] = useState<boolean>(false)
  if (props.horizontalLocation === 'right') {
    return (
      <ButtonElement
        hover={!hoverDisabled && hover}
        pressed={pressed || active}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        {...hoverProps}
        {...props}
        ref={ref}
      >
        <Content divider={8}>{children}</Content>
        <IconAttachment
          iconSvg={props.iconSvg}
          valueRadius={props.valueRadius}
          valueWidth={props.valueWidth}
          valueHeight={props.valueHeight}
          valueBackground={props.valueBackground}
        />
      </ButtonElement>
    )
  }
  if (props.horizontalLocation === 'left') {
    return (
      <ButtonElement
        hover={hover}
        pressed={pressed || active}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        {...hoverProps}
        {...props}
        ref={ref}
      >
        <IconAttachment
          iconSvg={props.iconSvg}
          valueRadius={props.valueRadius}
          valueWidth={props.valueWidth}
          valueHeight={props.valueHeight}
          valueBackground={props.valueBackground}
        />
        <Content divider={8}>{children}</Content>
      </ButtonElement>
    )
  }
  return (
    <ButtonElement
      hover={hover}
      pressed={pressed || active}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      {...hoverProps}
      {...props}
      ref={ref}
    >
      <Content divider={8}>{children}</Content>
    </ButtonElement>
  )
})
