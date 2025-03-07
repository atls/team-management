import type { FC }                           from 'react'
import type { PropsWithChildren }            from 'react'

import type { DropdownButtonProps }          from './button.interfaces.js'
import type { DropdownButtonContainerProps } from './button.interfaces.js'
import type { DotTheme }                     from './button.interfaces.js'

import { Box }                               from '@atls-ui-parts/layout'
import { useTheme }                          from '@emotion/react'
import styled                                from '@emotion/styled'
import { useHover }                          from 'react-laag'
import React                                 from 'react'

import { DotComponent }                      from './dot/index.js'
import { baseButtonStyles }                  from './button.styles.js'
import { sizeButtonStyles }                  from './button.styles.js'
import { appearanceButtonStyles }            from './button.styles.js'

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
      pressed={isOpen}
      hover={hover}
      onClick={onClick}
      {...hoverProps}
    >
      <DotComponent count={theme.spaces?.normalCount || DEFAULT_COUNT} />
      {children}
    </DropdownButtonContainer>
  )
}
