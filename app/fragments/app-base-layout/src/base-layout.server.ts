import { graphql } from '@octokit/graphql'

import { cookies } from 'next/headers'

export const BaseLayoutServer = async () => {
  const token = cookies().get('token').value

  console.log(token)

  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
    },
  })
  const { repository } = await graphqlWithAuth(`
  {
    repository(owner: "octokit", name: "graphql.js") {
      issues(last: 3) {
        edges {
          node {
            title
          }
        }
      }
    }
  }
`)
}
