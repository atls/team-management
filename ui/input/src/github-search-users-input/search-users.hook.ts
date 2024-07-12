import { SEARCH_USER }          from '@globals/data'
import { octokitGraphqlClient } from '@globals/data'
import { getTokenCookie }       from '@globals/helpers'

import { SEARCH_USERS_LIMIT }   from './github-search-users-input.constants.js'

export const getSearchedUsers = async ({ searchQuery, suggestedItemsDispatch }) => {
  const token = getTokenCookie(document)

  return new Promise(async (resolve, reject) => {
    const client = octokitGraphqlClient(token)
    try {
      const response = await client(SEARCH_USER, {
        searchLimit: SEARCH_USERS_LIMIT,
        searchQuery,
      })

      const {
        search: {
          edges: [...nodes],
        },
      } = response

      const filtredNodes = nodes.filter(({ node }) => {
        return !!Object.keys(node).length
      })

      const matchedUsers = filtredNodes.map(({ node }) => {
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

      suggestedItemsDispatch({
        type: 'change',
        suggestedItems: matchedUsers,
      })

      resolve()
      // resolve(users)
    } catch (e) {
      // TODO catch error
      // TODO render error on cli
      console.error(e)
    }
  })
}
