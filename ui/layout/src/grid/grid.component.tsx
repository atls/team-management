import styled                         from '@emotion/styled'
import { Box }                        from '@atls-ui-parts/layout'

import React                          from 'react'
import { FC }                         from 'react'
import { PropsWithChildren }          from 'react'

import { GridAutoRowsProps }          from './grid.interfaces.js'
import { GridAutoRowsContainerProps } from './grid.interfaces.js'
import { gridAutoRowsStyles }         from './grid.styles.js'
import { baseGridAutoRowsStyles }     from './grid.styles.js'

const GridAutoRowsContainer = styled(Box)<PropsWithChildren<GridAutoRowsContainerProps>>(
  gridAutoRowsStyles,
  baseGridAutoRowsStyles
)

export const GridAutoRows: FC<PropsWithChildren<GridAutoRowsProps>> = (props) => {
  const { children, columns, maxColumnWidth, ...otherProps } = props

  const getCssPropString = (columnsQuantity: number | Array<number>): string =>
    `repeat(${columnsQuantity}, minmax(auto, ${maxColumnWidth}px))`

  let gridTemplateColumns: string | Array<string> = ''

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
