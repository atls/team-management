import { useTheme }  from '@emotion/react'

import React         from 'react'

import { Box }       from '@ui/layout'
import { Text }      from '@ui/text'
import { ThemeType } from '@ui/theme'

// TODO interfaces

export const Progress = ({ percentage }) => {
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
