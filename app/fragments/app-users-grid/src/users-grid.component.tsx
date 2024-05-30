import React        from 'react'

import { UserCard } from '@app/user-card'
import { Box }      from '@ui/layout'

const UsersGrid = () => {
  return (
    <Box display='grid' gridTemplateColumns='repeat(3,407px)' gap='22px'>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </Box>
  )
}
export { UsersGrid }
