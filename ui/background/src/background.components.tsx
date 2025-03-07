import type { ThemeType }         from '@ui/theme'
import type { PropsWithChildren } from 'react'
import type { FC }                from 'react'

import type { BackgroundProps }   from './background.interfaces.js'

import { useTheme }               from '@emotion/react'
import React                      from 'react'

import { Box }                    from '@ui/layout'

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
