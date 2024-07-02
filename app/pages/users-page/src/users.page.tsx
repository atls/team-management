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
  const token = NEXT_MY_TOKEN
  const client = octokitGraphqlClient(token as string)

  // const { dataOrg } = useOrganizations()

  const orgData = await client(GET_USERS)

  console.log(orgData)
  const dict = {}
  const teams = orgData.organization.teams.nodes.map((org) => org)
  const teamMembers = teams.flatMap((team) => team.members.nodes)
  const uniqUsers = teamMembers.filter(({ id }) => !dict[id] && (dict[id] = 1))

  return (
    <UsersGrid>
      {uniqUsers?.map((user) => (
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
