import React        from 'react'

import { UserCard } from '@app/user-card'
import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'

const UsersGrid = () => {
  return (
    <Box display='flex' flexWrap='wrap' style={{ gap: '22px' }}>
      <Box minwidth='30.5%'>
        <UserCard />
      </Box>
      <Box minwidth='30.5%'>
        <UserCard />
      </Box>
      <Box minwidth='30.5%'>
        <UserCard />
      </Box>
      <Box minwidth='30.5%'>
        <UserCard />
      </Box>
      <Box minwidth='30.5%'>
        <UserCard />
      </Box>
    </Box>
    // <div
    //   style={{
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(3, 1fr)',
    //     gap: '22px',
    //   }}
    // >
    //   {/*<Layout display='grid'>*/}
    //   {/*  {' '}*/}
    //   {/*  <Column></Column>*/}
    //   {/*</Layout>*/}
    //   <UserCard />
    //   <UserCard />
    //   <UserCard />
    //   <UserCard />
    // </div>
  )
}
export { UsersGrid }
