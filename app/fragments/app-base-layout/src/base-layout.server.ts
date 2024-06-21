import { graphql } from '@octokit/graphql'

import { cookies } from 'next/headers'

export const BaseLayoutServer = async () => {
  const token = cookies().get('token').value
  // TODO redirect to registration if token not exist

  // const graphqlWithAuth = graphql.defaults({
  //   headers: {
  //     authorization: `token ${token}`,
  //   },
  // })

  //   const response = await graphqlWithAuth(`
  //   {
  //     repository(owner: "octokit", name: "graphql.js") {
  //       issues(last: 3) {
  //         edges {
  //           node {
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // TODO query in query
  //   const response = await graphqlWithAuth(`
  //   {
  //     viewer { login, name, email, avatarUrl }
  //   }
  // `)

  // console.log(response)
}
