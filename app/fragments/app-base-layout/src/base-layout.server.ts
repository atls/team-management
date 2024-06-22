import { cookies }              from 'next/headers'
import { redirect }             from 'next/navigation'

import { GET_VIEWER }           from '@globals/data'
import { octokitGraphqlClient } from '@globals/data'

export const BaseLayoutServer = async () => {
  const token = cookies().get('token').value
  try {
    const client = octokitGraphqlClient(token)
    const { viewer } = await client(GET_VIEWER)
    return viewer
  } catch (e) {
    if (e.status === 401) {
      redirect('/registration')
    } else {
      throw e
    }
  }
}
