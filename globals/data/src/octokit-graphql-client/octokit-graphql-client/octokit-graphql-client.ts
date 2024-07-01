import { graphql } from '@octokit/graphql'

export const octokitGraphqlClient = (token: string) => {
  const graphqlClient = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
    },
  })

  return graphqlClient
}
