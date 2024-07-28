import type { ProgressProps } from './progress.interfaces.js'

import { useTheme }           from '@emotion/react'

import React                  from 'react'
import { FC }                 from 'react'

import { Box }                from '@ui/layout'
import { Text }               from '@ui/text'
import { ThemeType }          from '@ui/theme'

export const Progress: FC<ProgressProps> = ({ percentage }) => {
  const theme = useTheme() as ThemeType

  return (
    <Box width='100%' height={theme.spaces.medium} backgroundColor={theme.colors.BLUE_0}>
      <Box
        width={`${percentage}%`}
        height='100%'
        padding={theme.spaces.v0h24}
        alignItems='center'
        backgroundColor={theme.colors.BLUE_400}
      >
        <Text fontSize='small.default' color={theme.colors.white}>
          {percentage}% done
        </Text>
      </Box>
    </Box>
  )
}
