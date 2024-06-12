import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'

import { Box }               from '@ui/layout'
import { ThemeType }         from '@ui/theme'

export const Background: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme() as ThemeType
  return (
    <Box
      background='url(/Bg.png)'
      height={theme.spaces.fullVh}
      width={theme.spaces.fullWidth}
      backgroundSize='cover'
      justifyContent='center'
    >
      {children}
    </Box>
  )
}
