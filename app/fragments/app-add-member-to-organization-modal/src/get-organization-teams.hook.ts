import { getCookieClient }        from '@globals/helpers'

import { GET_ORGANIZATION_TEAMS } from '@globals/data'
import { octokitGraphqlClient }   from '@globals/data'

const ORGANIZATION_TEAMS_LIMIT = 16

export const getOrganizatoinTeamsData = (organizationId) => {
  const TOKEN_COOKIE_NAME = process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME
  const { [TOKEN_COOKIE_NAME]: token } = getCookieClient(document)

  return new Promise(async (resolve, reject) => {
    const client = octokitGraphqlClient(token)

    try {
      const response = await client(GET_ORGANIZATION_TEAMS, {
        organizationId,
        organizationTeamsLimit: ORGANIZATION_TEAMS_LIMIT,
      })

      const {
        node: {
          teams: { nodes: teamsData },
        },
      } = response

      resolve(teamsData)
    } catch (e) {
      // TODO catch error
      // TODO render error on cli
      console.error(e)
    }
  })
}
