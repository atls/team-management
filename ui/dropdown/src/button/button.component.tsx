import styled                           from '@emotion/styled'
import { Box }                          from '@atls-ui-parts/layout'

import React                            from 'react'
import { FC }                           from 'react'
import { useHover }                     from 'react-laag'

import { DropdownButtonProps }          from './button.interfaces'
import { DropdownButtonContainerProps } from './button.interfaces'
import { DotComponent }                 from './dot'
import { baseButtonStyles }             from './button.styles'
import { sizeButtonStyles }             from './button.styles'
import { appearanceButtonStyles }       from './button.styles'

const DropdownButtonContainer = styled(Box)<DropdownButtonContainerProps>(
  baseButtonStyles,
  sizeButtonStyles,
  appearanceButtonStyles
)

export const DropdownButton: FC<DropdownButtonProps> = ({
  triggerProps,
  onClick,
  isOpen,
  children,
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
      <DotComponent />
      {children}
    </DropdownButtonContainer>
  )
}
