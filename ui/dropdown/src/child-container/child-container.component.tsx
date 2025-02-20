import { Box }                            from '@atls-ui-parts/layout'
import { BoxProps }                       from '@atls-ui-parts/layout'
import styled                             from '@emotion/styled'
import { FC }                             from 'react'
import { PropsWithChildren }              from 'react'
import { MouseEventHandler }              from 'react'
import React                              from 'react'

import { ChildContainerProps }            from './child-container.interfaces.js'
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
