import { graphql } from '@octokit/graphql'

export const createOctokitGraphqlClient = (token: string) => {
  const graphqlClient = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
    },
  })

  return graphqlClient
}
