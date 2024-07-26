import type { GetOrganizationsDataType }    from './get-organizations-data.interface.js'
import type { GetViewerOrganizationsQuery } from '@globals/data'
import type { OrganizationDataType }        from '@globals/data'

import { GET_VIEWER_ORGANIZATIONS }         from '@globals/data'
import { octokitGraphqlClient }             from '@globals/data'
import { getTokenCookie }                   from '@globals/helpers'

export const getOrganizationsData: GetOrganizationsDataType = async ({
  organizationsLimit,
  organizationMembersLimit,
  setOrganizationsData,
  toast,
}) => {
  try {
    const token = getTokenCookie(document)
    const client = octokitGraphqlClient(token)

    const response = (await client(GET_VIEWER_ORGANIZATIONS, {
      organizationsLimit,
      organizationMembersLimit,
    })) as GetViewerOrganizationsQuery

    const {
      viewer: {
        organizations: { nodes: responseOrganizationsData },
      },
    } = response

    setOrganizationsData(responseOrganizationsData as OrganizationDataType)
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.status)
  }
}
