import type { FC }                         from 'react'
import type { PropsWithChildren }          from 'react'

import type { GridAutoRowsProps }          from './grid.interfaces.js'
import type { GridAutoRowsContainerProps } from './grid.interfaces.js'

import { Box }                             from '@atls-ui-parts/layout'
import styled                              from '@emotion/styled'
import React                               from 'react'

import { gridAutoRowsStyles }              from './grid.styles.js'
import { baseGridAutoRowsStyles }          from './grid.styles.js'

const GridAutoRowsContainer = styled(Box)<PropsWithChildren<GridAutoRowsContainerProps>>(
  gridAutoRowsStyles,
  baseGridAutoRowsStyles
)

export const GridAutoRows: FC<PropsWithChildren<GridAutoRowsProps>> = (props) => {
  const { children, columns, maxColumnWidth, ...otherProps } = props

  const getCssPropString = (columnsQuantity: number): string =>
    `repeat(${columnsQuantity}, minmax(auto, ${maxColumnWidth}px))`

  let gridTemplateColumns: Array<string> | string = ''

  if (columns && maxColumnWidth) {
    if (Array.isArray(columns)) {
      gridTemplateColumns = []
      for (const column of columns) {
        gridTemplateColumns.push(getCssPropString(column))
      }
    } else {
      gridTemplateColumns = getCssPropString(columns)
    }
  }

  return (
    <GridAutoRowsContainer gridTemplateColumns={gridTemplateColumns} {...otherProps}>
      {children}
    </GridAutoRowsContainer>
  )
}
