import { GET_ORGANIZATION_TEAMS } from '@globals/data'
import { octokitGraphqlClient }   from '@globals/data'
import { getTokenCookie }         from '@globals/helpers'

const ORGANIZATION_TEAMS_LIMIT = 16

export const getOrganizatoinTeamsHook = ({ open, organizationId, teamsData, setTeamsData }) => {
  if (open && !teamsData.length) {
    const token = getTokenCookie(document)

    const getOrganizatoinTeamsPromise = () => {
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

    getOrganizatoinTeamsPromise().then((responseTeamsData) => {
      setTeamsData(responseTeamsData)
    })
  }
}
