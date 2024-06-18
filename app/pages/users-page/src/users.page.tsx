import React          from 'react'

import { UserCard }   from '@app/user-card'
import { UsersGrid }  from '@app/users-grid'

import { USERS_DATA } from './users.constants.js'
import { UserData }   from './users.interfaces.js'

const Users: React.FC = () => (
  <UsersGrid>
    {USERS_DATA.map((user: UserData) => (
      <UserCard
        key={user.id}
        avatar={user.avatar}
        name={user.name}
        position={user.position}
        organizations={user.organizations.length}
        time={user.time}
        organizationsData={user.organizations}
        services={user.services}
      />
    ))}
  </UsersGrid>
)

export default Users
