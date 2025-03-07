import type { FC }                from 'react'

import type { AtlantisLogoProps } from './atlantis-logo.interfaces.js'

import { useContext }             from 'react'
import React                      from 'react'

import { Box }                    from '@ui/layout'
import { Logo }                   from '@ui/logo'

import { SidebarStateContext }    from '../sidebar.context.js'

export const AtlantisLogo: FC<AtlantisLogoProps> = ({ activeTheme }) => {
  const isSidebarOpened = useContext(SidebarStateContext)

  return (
    <Box width='100%' justifyContent='center'>
      <Logo variant={isSidebarOpened ? 'base' : 'small'} activeTheme={activeTheme} />
    </Box>
  )
}
