import { FC }      from 'react'
import React       from 'react'

import { Divider } from '@ui/divider'
import { Box }     from '@ui/layout'

export const SidebarDivider: FC = () => (
  <Box padding='0 20px'>
    <Divider height={1} />
  </Box>
)
