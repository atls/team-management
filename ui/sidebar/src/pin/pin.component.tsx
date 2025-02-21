import type { ThemeType }      from '@ui/theme'
import type { FC }             from 'react'

import type { PinProps }       from './pin.interfaces.js'

import styled                  from '@emotion/styled'
import { useContext }          from 'react'
import React                   from 'react'

import { ChevroneLeftIcon }    from '@ui/icons'
import { ChevroneRightIcon }   from '@ui/icons'
import { Box }                 from '@ui/layout'
import { useTheme }            from '@emotion/react'

import { SidebarStateContext } from '../sidebar.context.js'
import { baseStyles }          from './pin.styles.js'
import { shapeStyles }         from './pin.styles.js'
import { appearanceStyles }    from './pin.styles.js'

const PinElement = styled(Box)(baseStyles, shapeStyles, appearanceStyles)

export const Pin: FC<PinProps> = ({ visibleHook }) => {
  const theme = useTheme() as ThemeType

  const isSidebarOpened = useContext(SidebarStateContext)

  const ICON_COLOR = theme.colors.sidebar.iconColor

  return (
    <PinElement onClick={visibleHook}>
      <Box
        width={theme.spaces.moderate}
        height={theme.spaces.moderate}
        justifyContent='center'
        alignItems='center'
      >
        {isSidebarOpened ? (
          <ChevroneLeftIcon color={ICON_COLOR} />
        ) : (
          <ChevroneRightIcon color={ICON_COLOR} />
        )}
      </Box>
    </PinElement>
  )
}
