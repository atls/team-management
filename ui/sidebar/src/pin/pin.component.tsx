import { useTheme }         from '@emotion/react'

import React                from 'react'
import { FC }               from 'react'

import { ChevroneLeftIcon } from '@ui/icons'
import { Box }              from '@ui/layout'
import { ThemeType }        from '@ui/theme'

// TODO open/closed
export const Pin: FC<any> = () => {
  const theme = useTheme() as ThemeType

  return (
    <Box
      cursor='pointer'
      marginRight={-16}
      alignSelf='end'
      backgroundColor={theme.colors.white}
      boxShadow={theme.shadows.moorena}
      borderRadius={theme.radii.f5}
    >
      <Box
        width={theme.spaces.moderate}
        height={theme.spaces.moderate}
        justifyContent='center'
        alignItems='center'
      >
        <ChevroneLeftIcon />
      </Box>
    </Box>
  )
}
