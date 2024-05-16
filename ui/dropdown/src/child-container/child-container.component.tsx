import styled                             from '@emotion/styled'
import { Box }                            from '@atls-ui-parts/layout'

import React                              from 'react'
import { FunctionComponent }              from 'react'

import { ChildContainerProps }            from './child-container.interfaces'
import { baseChildContainerStyles }       from './child-container.styles'
import { shapeChildContainerStyles }      from './child-container.styles'
import { appearanceChildContainerStyles } from './child-container.styles'

// TODO import themes

const StyledBox = styled(Box)<any>(
  baseChildContainerStyles,
  shapeChildContainerStyles,
  appearanceChildContainerStyles
)

export const ChildContainer: FunctionComponent<ChildContainerProps> = ({
  layerProps,
  children,
}) => <StyledBox {...layerProps}>{children}</StyledBox>
