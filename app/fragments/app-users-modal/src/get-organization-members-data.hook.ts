import { GET_ORGANIZATION_MEMBERS } from '@globals/data'
import { octokitGraphqlClient }     from '@globals/data'

export const getOrganizatoinMembersData = (organizationId, setMembersData) => {
  // TODO use token name from ENV to get cookie from client
  // TODO better cookie string split
  const { TOKEN_COOKIE_NAME } = process.env

  const token = document.cookie.split('=').at(-1)
  return new Promise(async (resolve, reject) => {
    const client = octokitGraphqlClient(token)
    try {
      const response = await client(GET_ORGANIZATION_MEMBERS, {
        organizationId,
      })
      const {
        node: {
          membersWithRole: { nodes: membersData },
        },
      } = response
      resolve(membersData)
    } catch (e) {
      // TODO catch error
      // TODO render error on cli
      console.error(e)
    }
  })
}
