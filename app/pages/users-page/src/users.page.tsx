import React             from 'react'

import { ThemeSelector } from '@app/theme-selector'
import { UserCard }      from '@app/user-card'
import { UsersGrid }     from '@app/users-grid'
import { UsersTitle }    from '@app/users-title'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Sidebar }       from '@ui/sidebar'

export const Users = () => {
  return (
    <Row background={'#F8F8F8'}>
      <Sidebar name={'Nikita Efimov'} email={'efimov@atls.com'} src={'/profile.png'} />
      <Column alignItems='flex-end' width='100%' margin='0 240px 0 175px '>
        <ThemeSelector />
        <UsersTitle />
        <UsersGrid>
          <UserCard />
          <UserCard />
          <UserCard />
        </UsersGrid>
      </Column>
    </Row>
  )
}
export default Users
