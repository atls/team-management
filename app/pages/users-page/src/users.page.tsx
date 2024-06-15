import React             from 'react'

import { ThemeSelector } from '@app/theme-selector'
import { UserCard }      from '@app/user-card'
import { UsersGrid }     from '@app/users-grid'
import { UsersTitle }    from '@app/users-title'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Sidebar }       from '@ui/sidebar'

import { USERS_DATA }    from './users.constants.js'

export const Users = () => (
  <Row>
    <Sidebar name='Nikita Efimov' email='efimov@atls.com' src='/profile.png' />
    <Column alignItems='flex-end' width='100%' flex={1}>
      <ThemeSelector />
      <Column margin='0 auto 0'>
        <UsersTitle />
        <UsersGrid>
          {USERS_DATA.map((user) => (
            <UserCard
              key={user.id}
              avatar={user.avatar}
              name={user.name}
              position={user.position}
              organizations={user.organizations.length}
              time={user.time}
              organizationsData={user.organizations}
            />
          ))}
        </UsersGrid>
      </Column>
    </Column>
  </Row>
)

export default Users
