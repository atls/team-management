import { useTheme }            from '@emotion/react'

import React                   from 'react'
import { FC }                  from 'react'
import { useContext }          from 'react'

import { ChevroneLeftIcon }    from '@ui/icons'
import { ChevroneRightIcon }   from '@ui/icons'
import { Box }                 from '@ui/layout'
import { ThemeType }           from '@ui/theme'

import { SidebarStateContext } from '../sidebar.context.js'

// TODO open/closed
export const Pin: FC<any> = ({ visibleHook }) => {
  const theme = useTheme() as ThemeType

  const isSidebarOpened = useContext(SidebarStateContext)

  return (
    <Box
      zIndex={theme.spaces.s1500}
      cursor='pointer'
      marginRight={-16}
      alignSelf='end'
      backgroundColor={theme.colors.white}
      boxShadow={theme.shadows.moorena}
      borderRadius={theme.radii.f5}
      onClick={visibleHook}
    >
      <Box
        width={theme.spaces.moderate}
        height={theme.spaces.moderate}
        justifyContent='center'
        alignItems='center'
      >
        {isSidebarOpened ? <ChevroneLeftIcon /> : <ChevroneRightIcon />}
      </Box>
    </Box>
  )
}
