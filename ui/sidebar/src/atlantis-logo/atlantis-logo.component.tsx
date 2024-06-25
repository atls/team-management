import React                   from 'react'
import { FC }                  from 'react'
import { useContext }          from 'react'

import { Box }                 from '@ui/layout'
import { Logo }                from '@ui/logo'

import { SidebarStateContext } from '../sidebar.context.js'
import { AtlantisLogoProps }   from './atlantis-logo.interfaces.js'

// TODO interface
export const AtlantisLogo: FC<AtlantisLogoProps> = ({ activeTheme }) => {
  const isSidebarOpened = useContext(SidebarStateContext)

  return (
    <Box width='100%' justifyContent='center'>
      <Logo variant={isSidebarOpened ? 'base' : 'small'} activeTheme={activeTheme} />
    </Box>
  )
}
