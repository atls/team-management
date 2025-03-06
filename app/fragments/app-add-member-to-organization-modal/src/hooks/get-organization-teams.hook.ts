import type { OrganizationTeamType }     from '@globals/data'

import type { GetOrganizationTeamsType } from './get-organization-teams.interface.js'

import { GET_ORGANIZATION_TEAMS }        from '@globals/data'
import { requestOctokitGraphqlData }     from '@globals/data'

import { ORGANIZATION_TEAMS_LIMIT }      from '../add-member-to-organization-modal.constants.js'

export const getOrganizatoinTeamsHook: GetOrganizationTeamsType = async ({
  organizationId,
  setTeamsData,
  toast,
}) => {
  try {
    const response = await requestOctokitGraphqlData(document, GET_ORGANIZATION_TEAMS, {
      organizationId,
      organizationTeamsLimit: ORGANIZATION_TEAMS_LIMIT,
    })

    if (response?.node && 'teams' in response.node) {
      const {
        node: {
          teams: { nodes: teamsData },
        },
      } = response

      setTeamsData(teamsData as Array<OrganizationTeamType>)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    toast.error(e.message, e.status)
  }
}
