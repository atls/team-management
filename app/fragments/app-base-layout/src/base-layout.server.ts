import { graphql } from '@octokit/graphql'

import { cookies } from 'next/headers'

export const BaseLayoutServer = async () => {
  const token = cookies().get('token').value
  // TODO redirect to registration if token not exist
  // TODO middleware

  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${token}`,
    },
  })

  // TODO query in query
  // не понимаю почему для того, чтобы  увидел мой Email, нужно добавлять его в профиль.
  // oAuth app вообще не возвращал мне Email

  const response = await graphqlWithAuth(`
    {
      viewer { login, name, avatarUrl, email }
    }
  `)

  const { viewer } = response
  return viewer
}
