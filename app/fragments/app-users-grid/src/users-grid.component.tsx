import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { Box }               from '@ui/layout'

import { UserGridTheme }     from './user-grid.interface.js'

const UsersGrid: FC<PropsWithChildren> = ({ children }) => {
  const theme: UserGridTheme = useTheme()
  return (
    <Box
      display='grid'
      gridTemplateColumns={theme.spaces?.threeColumnsGrid}
      gap={theme.spaces?.semiLarge}
    >
      {children}
    </Box>
  )
}
export { UsersGrid }
