import React                            from 'react'
import { FC }                           from 'react'

import { Box }                          from '@ui/layout'

import { SuggestedItemsContainerProps } from './suggested-items-container.interfaces'

export const SuggestedItemsContainer: FC<SuggestedItemsContainerProps> = ({
  children,
  width,
  layerProps,
}) => {
  return (
    <Box
      zIndex={1500}
      width={width}
      backgroundColor='#F5F9FF'
      borderRadius='0 0 9px 9px'
      padding={18}
      gap={10}
      flexWrap='wrap'
      {...layerProps}
    >
      {children}
    </Box>
  )
}
