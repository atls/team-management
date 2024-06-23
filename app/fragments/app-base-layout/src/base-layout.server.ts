import type { GraphQlQueryResponseData } from '@octokit/graphql'

// @ts-ignore:next-line
import { cookies }                       from 'next/headers'
// @ts-ignore:next-line
import { redirect }                      from 'next/navigation'

import { GET_VIEWER }                    from '@globals/data'
import { octokitGraphqlClient }          from '@globals/data'

export const BaseLayoutServer = async () => {
  const token = cookies().get('token').value
  try {
    const client = octokitGraphqlClient(token)
    const { viewer } = (await client(GET_VIEWER)) as GraphQlQueryResponseData
    return viewer
  } catch (e: any) {
    // есть тип GraphqlResponseError
    // он не подходит, тк мне прилетает ошибка запроса:
    // bad creditentials. как её обрабатывать не понимаю
    if (e.status === 401) {
      redirect('/registration')
    }
    throw e
  }
}
