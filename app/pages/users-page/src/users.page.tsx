'use client'

import { ApolloClient }     from '@apollo/client'
import { ApolloProvider }   from '@apollo/client'
import { InMemoryCache }    from '@apollo/client'
import { useQuery }         from '@apollo/client'

import React                from 'react'
import { Octokit }          from 'octokit'

import client               from '@globals/data'
import { UserCard }         from '@app/user-card'
import { UsersGrid }        from '@app/users-grid'
import { useOrganizations } from '@globals/data'

import { USERS_DATA }       from './users.constants.js'
import { UserData }         from './users.interfaces.js'

const Users: React.FC = async () => {
  const octokit = new Octokit({
    auth: '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',
  })

  const dataOrg = await octokit.graphql(`query{
    organization(login: "ssagg-test") {
      name
      teams(first: 100, after: null) {
        nodes {
          members {
            nodes {
              avatarUrl
              name
              email
              id
              organizations(first:100){
                nodes{
                  id
                  name
                  avatarUrl
                }
              }
            }
          }
          name
        }
      }
    }
  }`)
  const allUsers = dataOrg.organization.teams.nodes[0].members.nodes
  console.log(allUsers)

  return (
    <UsersGrid>
      {allUsers.map((user) => (
        <UserCard
          key={user.id}
          avatar={user.avatarUrl}
          name={user.name}
          // position={user.position}
          organizations={user.organizations.nodes.length}
          // time={user.time}
          organizationsData={user.organizations.nodes}
          // services={user.services}
        />
      ))}
    </UsersGrid>
  )
}

export default Users
