import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'

import { Box }               from '@ui/layout'
import { ThemeType }         from '@ui/theme'

import { BackgroundProps }   from './background.interfaces.js'

export const Background: FC<PropsWithChildren<BackgroundProps>> = ({
  children,
  backgroundUrl,
  backgroundSize,
  justifyContent,
  height,
  width,
}) => {
  const theme = useTheme() as ThemeType
  return (
    <Box
      background={backgroundUrl}
      height={height || theme.spaces.fullVh}
      width={width || theme.spaces.fullWidth}
      backgroundSize={backgroundSize || 'cover'}
      justifyContent={justifyContent || 'center'}
    >
      {children}
    </Box>
  )
}
