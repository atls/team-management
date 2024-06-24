import React                   from 'react'
import { FC }                  from 'react'
import { useContext }          from 'react'

import { Box }                 from '@ui/layout'
import { Logo }                from '@ui/logo'

import { SidebarStateContext } from '../sidebar.context.js'

// TODO interface
export const AtlantisLogo: FC = () => {
  const isSidebarOpened = useContext(SidebarStateContext)

  return (
    <Box width='100%' justifyContent='center'>
      <Logo variant={isSidebarOpened ? 'base' : 'small'} />
    </Box>
  )
}
