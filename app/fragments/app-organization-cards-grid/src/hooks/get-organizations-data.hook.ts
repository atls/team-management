import type { OrganizationDataType }     from '@globals/data'

import type { GetOrganizationsDataType } from './get-organizations-data.interface.js'

import { GET_VIEWER_ORGANIZATIONS }      from '@globals/data'
import { requestOctokitGraphqlData }     from '@globals/data'

export const getOrganizationsData: GetOrganizationsDataType = async ({
  organizationsLimit,
  organizationMembersLimit,
  setOrganizationsData,
  toast,
}) => {
  try {
    const response = await requestOctokitGraphqlData(document, GET_VIEWER_ORGANIZATIONS, {
      organizationsLimit,
      organizationMembersLimit,
    })

    const {
      viewer: {
        organizations: { nodes: responseOrganizationsData },
      },
    } = response

    setOrganizationsData(responseOrganizationsData as Array<OrganizationDataType>)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    toast.error(e.message, e.status)
  }
}
