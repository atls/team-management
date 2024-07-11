import type { GetViewerQuery }  from '@globals/data'

// @ts-ignore:next-line
import { cookies }              from 'next/headers'
// @ts-ignore:next-line
import { redirect }             from 'next/navigation'

import { GET_VIEWER }           from '@globals/data'
import { octokitGraphqlClient } from '@globals/data'

export const BaseLayoutServer = async () => {
  const TOKEN_COOKIE_NAME = process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME as string
  const token = cookies().get(TOKEN_COOKIE_NAME).value

  try {
    const client = octokitGraphqlClient(token)
    const response = (await client(GET_VIEWER)) as GetViewerQuery

    const { viewer } = response
    return viewer
  } catch (e: any) {
    if (e.status === 401) {
      redirect('/registration')
    }
    throw e
  }
}
