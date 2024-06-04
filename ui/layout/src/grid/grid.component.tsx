import styled                         from '@emotion/styled'
import { Box }                        from '@atls-ui-parts/layout'

import React                          from 'react'
import { FC }                         from 'react'

import { GridAutoRowsProps }          from './grid.interfaces'
import { GridAutoRowsContainerProps } from './grid.interfaces'
import { gridAutoRowsStyles }         from './grid.styles'
import { baseGridAutoRowsStyles }     from './grid.styles'

const GridAutoRowsContainer = styled(Box)<GridAutoRowsContainerProps>(
  gridAutoRowsStyles,
  baseGridAutoRowsStyles
)

export const GridAutoRows: FC<GridAutoRowsProps> = (props) => {
  const { children, columns, maxColumnWidth, ...otherProps } = props
  let gridTemplateColumns
  if (columns && maxColumnWidth)
    gridTemplateColumns = `repeat(${columns}, minmax(auto, ${maxColumnWidth}px))`
  return (
    <GridAutoRowsContainer gridTemplateColumns={gridTemplateColumns} {...otherProps}>
      {children}
    </GridAutoRowsContainer>
  )
}
