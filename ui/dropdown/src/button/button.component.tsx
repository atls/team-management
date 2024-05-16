import styled                     from '@emotion/styled'
import { Box }                    from '@atls-ui-parts/layout'

import React                      from 'react'
import { FunctionComponent }      from 'react'
import { useHover }               from 'react-laag'

import { ButtonProps }            from './button.interfaces'
import { baseButtonStyles }       from './button.styles'
import { sizeButtonStyles }       from './button.styles'
import { appearanceButtonStyles } from './button.styles'

const DropdownButtonContainer = styled(Box)<any>(
  baseButtonStyles,
  sizeButtonStyles,
  appearanceButtonStyles
)

const Dot = () => <div style={{ backgroundColor: '#508EE9', width: 3, height: 3 }} />

export const DropdownButton: FunctionComponent<ButtonProps> = ({
  triggerProps,
  onClick,
  isOpen,
}) => {
  const [hover, hoverProps] = useHover()
  return (
    <DropdownButtonContainer
      {...triggerProps}
      onClick={onClick}
      pressed={isOpen}
      hover={hover}
      {...hoverProps}
    >
      <Dot />
      <Dot />
      <Dot />
    </DropdownButtonContainer>
  )
}
