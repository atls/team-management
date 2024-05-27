import { useTheme } from '@emotion/react'

import React        from 'react'
import { FC }       from 'react'

import { Box }      from '@ui/layout'

export const IconButton: FC<any> = ({ children }) => {
  const theme: any = useTheme()

  return (
    <Box
      width={42}
      height={42}
      borderRadius={24}
      justifyContent='center'
      alignItems='center'
      boxShadow={theme.shadows.black}
    >
      {children}
    </Box>
  )
}
