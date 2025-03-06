import type { OrganizationDataType }                from '@globals/data'

import type { GetResponseOrganizationsDataType }    from './get-response-organizations-data.interface.js'

import { GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS } from '@globals/data'
import { requestOctokitGraphqlData }                from '@globals/data'

export const getResponseOrganizationsData: GetResponseOrganizationsDataType = async ({
  organizationsLimit,
  organizationMembersLimit,
}) => {
  const response = await requestOctokitGraphqlData(
    document,
    GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS,
    {
      organizationsLimit,
      organizationMembersLimit,
    }
  )

  const responseOrganizationsData: Array<OrganizationDataType> = response.viewer.organizations.nodes

  if (!responseOrganizationsData.length) {
    throw new Error('Organizations not found')
  }

  return responseOrganizationsData
}
