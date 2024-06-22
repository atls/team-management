import { GET_VIEWER }           from '@globals/data'
import { octokitGraphqlClient } from '@globals/data'

import { cookies }              from 'next/headers'

export const BaseLayoutServer = async () => {
  const token = cookies().get('token').value
  // TODO redirect to registration if token not exist
  // TODO middleware

  const client = octokitGraphqlClient(token)
  const { viewer } = await client(GET_VIEWER)
  return viewer
}
