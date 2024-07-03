'use client'

import React                    from 'react'
// @ts-ignore:next-line
import { cookies }              from 'next/headers'

import { UserCard }             from '@app/user-card'
import { UsersGrid }            from '@app/users-grid'
import { GET_USERS }            from '@globals/data'
import { octokitGraphqlClient } from '@globals/data'

import { UserData }             from './users.interfaces.js'

const Users: React.FC = async () => {
  const { TOKEN_COOKIE_NAME } = process.env
  // const token = cookies().get(TOKEN_COOKIE_NAME as string).value
  const { NEXT_MY_TOKEN } = process.env
  const token =
    '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'
  const client = octokitGraphqlClient(token)

  // const { dataOrg } = useOrganizations()

  const orgData = await client(GET_USERS)

  console.log(orgData)
  const users = orgData.organization.membersWithRole.nodes
  console.log(users)

  return (
    <UsersGrid>
      {users?.map((user) => (
        <UserCard
          key={user?.id}
          avatar={user?.avatarUrl}
          name={user?.name}
          // position={user.position}
          organizations={user?.organizations?.nodes?.length}
          // time={user.time}
          organizationsData={user?.organizations.nodes}
          // services={user.services}
        />
      ))}
    </UsersGrid>
  )
}

export default Users
