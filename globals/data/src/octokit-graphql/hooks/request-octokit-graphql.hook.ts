import { getTokenCookie }             from '@globals/helpers'

import { createOctokitGraphqlClient } from '../client/index.js'

// TODO interfaces
export const requestOctokitGraphqlData = async (document, query, queryData) => {
  const token = getTokenCookie(document)
  const graphqlClient = createOctokitGraphqlClient(token)
  const response = await graphqlClient(query, queryData)
  return response
}
