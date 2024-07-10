import { SEARCH_USER }          from '@globals/data'
import { octokitGraphqlClient } from '@globals/data'

const SEARCH_LIMIT = 8

export const getSearchedUsers = async ({ searchQuery }) => {
  // TODO search delay

  const token = document.cookie.split('=').at(-1)
  return new Promise(async (resolve, reject) => {
    const client = octokitGraphqlClient(token)
    try {
      const response = await client(SEARCH_USER, {
        searchLimit: SEARCH_LIMIT,
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

      const users = filtredNodes.map(({ node }) => {
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

      resolve(users)
    } catch (e) {
      // TODO catch error
      // TODO render error on cli
      console.error(e)
    }
  })
}
