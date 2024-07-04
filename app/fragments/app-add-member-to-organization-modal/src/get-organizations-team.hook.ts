import { GET_ORGANIZATION_TEAMS } from '@globals/data'
import { octokitGraphqlClient }   from '@globals/data'

export const getOrganizatoinTeamsData = (organizationId) => {
  // TODO use token name from ENV to get cookie from client
  // TODO better cookie string split
  // TODO cookie split func to global/helpers
  const { TOKEN_COOKIE_NAME } = process.env

  const token = document.cookie.split('=').at(-1)
  return new Promise(async (resolve, reject) => {
    const client = octokitGraphqlClient(token)
    try {
      const response = await client(GET_ORGANIZATION_TEAMS, {
        organizationId,
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
