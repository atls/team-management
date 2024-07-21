import { GET_ORGANIZATION_TEAMS }    from '@globals/data'
import { GetOrganizationTeamsQuery } from '@globals/data'
import { octokitGraphqlClient }      from '@globals/data'
import { getTokenCookie }            from '@globals/helpers'

const ORGANIZATION_TEAMS_LIMIT = 16

export const getOrganizatoinTeamsHook = async ({ organizationId, setTeamsData, toast }) => {
  try {
    const token = getTokenCookie(document)
    const client = octokitGraphqlClient(token)

    const response = (await client(GET_ORGANIZATION_TEAMS, {
      organizationId,
      organizationTeamsLimit: ORGANIZATION_TEAMS_LIMIT,
    })) as GetOrganizationTeamsQuery

    if (response && response.node && 'teams' in response.node) {
      const {
        node: {
          teams: { nodes: teamsData },
        },
      } = response

      setTeamsData(teamsData)
    }
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
