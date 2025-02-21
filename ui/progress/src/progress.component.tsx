import type { ThemeType }     from '@ui/theme'
import type { FC }            from 'react'

import type { ProgressProps } from './progress.interfaces.js'

import React                  from 'react'

import { Condition }          from '@ui/condition'
import { Box }                from '@ui/layout'
import { Text }               from '@ui/text'
import { useTheme }           from '@emotion/react'

export const Progress: FC<ProgressProps> = ({ percentage }) => {
  const theme = useTheme() as ThemeType

  return (
    <Box
      width='100%'
      height={theme.spaces.medium}
      backgroundColor={theme.colors.BLUE_0}
      position='relative'
    >
      <Box
        width={`${percentage}%`}
        height='100%'
        alignItems='center'
        backgroundColor={theme.colors.BLUE_400}
      >
        <Condition match={Boolean(percentage)}>
          <Box padding={theme.spaces.v0h24} position='absolute' width='100%'>
            <Text fontSize='small.default' color={theme.colors.white}>
              {percentage}% done
            </Text>
          </Box>
        </Condition>
      </Box>
    </Box>
  )
}
