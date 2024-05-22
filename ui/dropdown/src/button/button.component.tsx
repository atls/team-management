import styled                           from '@emotion/styled'
import { Box }                          from '@atls-ui-parts/layout'
import { useTheme }                     from '@emotion/react'

import React                            from 'react'
import { FC }                           from 'react'
import { PropsWithChildren }            from 'react'
import { useHover }                     from 'react-laag'

import { DropdownButtonProps }          from './button.interfaces'
import { DropdownButtonContainerProps } from './button.interfaces'
import { DotTheme }                     from './button.interfaces'
import { DotComponent }                 from './dot'
import { baseButtonStyles }             from './button.styles'
import { sizeButtonStyles }             from './button.styles'
import { appearanceButtonStyles }       from './button.styles'

const DropdownButtonContainer = styled(Box)<DropdownButtonContainerProps>(
  baseButtonStyles,
  sizeButtonStyles,
  appearanceButtonStyles
)

export const DropdownButton: FC<PropsWithChildren<DropdownButtonProps>> = ({
  triggerProps,
  onClick,
  isOpen,
  children,
}) => {
  const DEFAULT_COUNT = 3
  const [hover, hoverProps] = useHover()
  const theme: DotTheme = useTheme()

  return (
    <DropdownButtonContainer
      {...triggerProps}
      onClick={onClick}
      pressed={isOpen}
      hover={hover}
      {...hoverProps}
    >
      <DotComponent count={theme.spaces?.normalCount || DEFAULT_COUNT} />
      {children}
    </DropdownButtonContainer>
  )
}
