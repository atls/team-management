import type { RequestOctokitRestDataType } from '../octokit-rest.interfaces.js'
import type { EndpointResponseType }       from '../octokit-rest.interfaces.js'

import { getTokenCookie }                  from '@globals/helpers'

import { createOctokitRestClient }         from '../client/index.js'

export const requestOctokitRestData: RequestOctokitRestDataType = async (document, query) => {
  const token = getTokenCookie(document)
  const restClient = createOctokitRestClient(token)
  const response = await restClient(...query)
  return response as EndpointResponseType
}
