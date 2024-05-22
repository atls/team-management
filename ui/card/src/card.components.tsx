import React                 from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'

import { Box }               from '@ui/layout'

import { CardProps }         from './card.interfaces'

export const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  boxShadow,
  width,
  height,
  borderRadius,
  backgroundColor,
  alignItems,
  justifyContent,
}) => (
  <Box
    boxShadow={boxShadow}
    width={width}
    height={height}
    borderRadius={borderRadius}
    display='flex'
    backgroundColor={backgroundColor}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </Box>
)
