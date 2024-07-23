import { SEARCH_USER }          from '@globals/data'
import { SearchUserQuery }      from '@globals/data'
import { octokitGraphqlClient } from '@globals/data'
import { getTokenCookie }       from '@globals/helpers'

import { SEARCH_USERS_LIMIT }   from '../github-users-search.constants.js'

export const getSearchedUsers = async ({ searchQuery, toast }) => {
  const token = getTokenCookie(document)
  const client = octokitGraphqlClient(token)

  try {
    const response = (await client(SEARCH_USER, {
      searchLimit: SEARCH_USERS_LIMIT,
      searchQuery,
    })) as SearchUserQuery

    if (response && response.search && response.search.edges?.length) {
      const {
        search: {
          edges: [...nodes],
        },
      } = response

      const filtredNodes = nodes.filter((nodeParams: any) => !!Object.keys(nodeParams.node).length)

      const matchedUsers = filtredNodes.map((nodeParams: any) => {
        const { node } = nodeParams
        const {
          id: nodeId,
          databaseId: githubUserId,
          name: primaryInfo,
          email: secondaryInfo,
          avatarUrl: imageSrc,
        } = node

        return {
          nodeId,
          githubUserId,
          primaryInfo,
          secondaryInfo,
          imageSrc,
        }
      })

      return matchedUsers
    }
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
