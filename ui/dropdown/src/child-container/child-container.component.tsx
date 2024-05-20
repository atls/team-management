import styled                             from '@emotion/styled'
import { Box }                            from '@atls-ui-parts/layout'

import React                              from 'react'
import { FC }                             from 'react'
import { PropsWithChildren }              from 'react'

import { ChildContainerProps }            from './child-container.interfaces'
import { baseChildContainerStyles }       from './child-container.styles'
import { shapeChildContainerStyles }      from './child-container.styles'
import { appearanceChildContainerStyles } from './child-container.styles'

const StyledBox = styled(Box)<any>(
  baseChildContainerStyles,
  shapeChildContainerStyles,
  appearanceChildContainerStyles
)

export const ChildContainer: FC<PropsWithChildren<ChildContainerProps>> = ({
  layerProps,
  children,
}) => {
  const childrenContainerHandler = (e: Event): void => {
    e.stopPropagation()
  }

  return (
    <StyledBox {...layerProps} onClick={childrenContainerHandler}>
      {children}
    </StyledBox>
  )
}
