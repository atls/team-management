import type { RequestOctokitGraphqlDataType } from '../octokit-graphql.interfaces.js'

import { getTokenCookie }                     from '@globals/helpers'

import { createOctokitGraphqlClient }         from '../client/index.js'

export const requestOctokitGraphqlData: RequestOctokitGraphqlDataType = async (
  document,
  query,
  queryData
) => {
  const token = getTokenCookie(document)
  const graphqlClient = createOctokitGraphqlClient(token)
  return graphqlClient(query, queryData)
}
