import type { BoxProps }                  from '@atls-ui-parts/layout'
import type { FC }                        from 'react'
import type { PropsWithChildren }         from 'react'
import type { MouseEventHandler }         from 'react'

import type { ChildContainerProps }       from './child-container.interfaces.js'

import { Box }                            from '@atls-ui-parts/layout'
import styled                             from '@emotion/styled'
import React                              from 'react'

import { baseChildContainerStyles }       from './child-container.styles.js'
import { shapeChildContainerStyles }      from './child-container.styles.js'
import { appearanceChildContainerStyles } from './child-container.styles.js'

const StyledBox = styled(Box)<BoxProps>(
  baseChildContainerStyles,
  shapeChildContainerStyles,
  appearanceChildContainerStyles
)

export const ChildContainer: FC<PropsWithChildren<ChildContainerProps>> = ({
  layerProps,
  children,
}) => {
  const childrenContainerHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
  }

  return (
    <StyledBox {...layerProps} onClick={childrenContainerHandler}>
      {children}
    </StyledBox>
  )
}
