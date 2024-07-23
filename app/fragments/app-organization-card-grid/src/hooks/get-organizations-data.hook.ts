import type { GetViewerOrganizationsQuery } from '@globals/data'

import { GET_VIEWER_ORGANIZATIONS }         from '@globals/data'
import { octokitGraphqlClient }             from '@globals/data'
import { getTokenCookie }                   from '@globals/helpers'

import { ORGANIZATIONS_LIMIT }              from '../organizations-page.constants.js'
import { ORGANIZATION_MEMBERS_LIMIT }       from '../organizations-page.constants.js'

// TODO interface
export const getOrganizationsData = async ({ setOrganizationsData, toast }) => {
  try {
    const token = getTokenCookie(document)
    const client = octokitGraphqlClient(token)
    const response = (await client(GET_VIEWER_ORGANIZATIONS, {
      organizationsLimit: ORGANIZATIONS_LIMIT,
      organizationMembersLimit: ORGANIZATION_MEMBERS_LIMIT,
    })) as GetViewerOrganizationsQuery

    const {
      viewer: {
        organizations: { nodes: responseOrganizationsData },
      },
    } = response

    setOrganizationsData(responseOrganizationsData)
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
