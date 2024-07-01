'use client'

import { graphql }          from '@octokit/graphql'

import React                from 'react'
import { Octokit }          from 'octokit'

import client               from '@globals/data'
import { UserCard }         from '@app/user-card'
import { UsersGrid }        from '@app/users-grid'
import { GET_USERS }        from '@globals/data'
import { useOrganizations } from '@globals/data'

import { UserData }         from './users.interfaces.js'

const Users: React.FC = async () => {
  const octokit = new Octokit({
    auth: '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',
  })
  const { dataOrg } = useOrganizations()
  console.log(dataOrg)
  const orgData = await octokit.graphql(GET_USERS)
  console.log(orgData)
  const allUsers = orgData.organization.teams.nodes[0].members.nodes
  // console.log(allUsers)

  return (
    <UsersGrid>
      {allUsers?.map((user) => (
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
