import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import { memo }              from 'react'

import { Box }               from '@ui/layout'
import { ThemeType }         from '@ui/theme'

const UsersGrid: FC<PropsWithChildren> = memo(({ children }) => {
  const theme = useTheme() as ThemeType
  return (
    <Box
      display='grid'
      gridTemplateColumns={theme.spaces.threeColumnsGrid}
      gap={theme.spaces.semiLarge}
    >
      {children}
    </Box>
  )
})
export { UsersGrid }
