import type { CreateOctokitGraphqlClientType } from '../octokit-graphql.interfaces.js'

import { graphql }                             from '@octokit/graphql'

export const createOctokitGraphqlClient: CreateOctokitGraphqlClientType = (token: string) => {
  const graphqlClient = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
    },
  })

  return graphqlClient
}
