import styled                  from '@emotion/styled'
import { useTheme }            from '@emotion/react'

import React                   from 'react'
import { FC }                  from 'react'
import { useContext }          from 'react'

import { ChevroneLeftIcon }    from '@ui/icons'
import { ChevroneRightIcon }   from '@ui/icons'
import { Box }                 from '@ui/layout'
import { ThemeType }           from '@ui/theme'

import { SidebarStateContext } from '../sidebar.context.js'
import { PinProps }            from './pin.interfaces.js'
import { baseStyles }          from './pin.styles.js'
import { shapeStyles }         from './pin.styles.js'
import { appearanceStyles }    from './pin.styles.js'

const PinElement = styled(Box)(baseStyles, shapeStyles, appearanceStyles)

export const Pin: FC<PinProps> = ({ visibleHook }) => {
  const theme = useTheme() as ThemeType

  const isSidebarOpened = useContext(SidebarStateContext)

  return (
    <PinElement onClick={visibleHook}>
      <Box
        width={theme.spaces.moderate}
        height={theme.spaces.moderate}
        justifyContent='center'
        alignItems='center'
      >
        {isSidebarOpened ? <ChevroneLeftIcon /> : <ChevroneRightIcon />}
      </Box>
    </PinElement>
  )
}
