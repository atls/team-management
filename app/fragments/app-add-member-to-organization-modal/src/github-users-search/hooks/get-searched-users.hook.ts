/* eslint-disable */

import type { SearchUserQuery }       from '@globals/data'

import type { GetSearchedUsersProps } from './get-searched-users.interfaces.js'

import { SEARCH_USER }                from '@globals/data'
import { requestOctokitGraphqlData }  from '@globals/data'

import { SEARCH_USERS_LIMIT }         from '../github-users-search.constants.js'

export const getSearchedUsers = async ({ searchQuery, toast }: GetSearchedUsersProps) => {
  try {
    const response = (await requestOctokitGraphqlData(document, SEARCH_USER, {
      searchLimit: SEARCH_USERS_LIMIT,
      searchQuery,
    })) as SearchUserQuery

    if (response?.search?.edges?.length) {
      const {
        search: {
          edges: [...nodes],
        },
      } = response

      const filtredNodes = nodes.filter((nodeParams: any) => !!Object.keys(nodeParams.node).length)

      const matchedUsers = filtredNodes.map((nodeParams: any) => {
        const { node } = nodeParams
        const {
          id,
          databaseId: githubUserId,
          name,
          email: secondaryInfo,
          avatarUrl: imageSrc,
        } = node

        return {
          id,
          githubUserId,
          name,
          secondaryInfo,
          imageSrc,
        }
      })

      return matchedUsers
    }
  } catch (e: any) {
    console.error(e)
    toast.error(e.message, e.status)
  }

  return []
}
