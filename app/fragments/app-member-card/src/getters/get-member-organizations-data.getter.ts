import type { OrganizationDataType }           from '@globals/data'

import type { GetMemberOrganizationsDataType } from './get-member-organizations-data.interface.js'

export const getMemberOrganizationsData: GetMemberOrganizationsDataType = ({
  memberData,
  organizationsData,
}) => {
  const memberOrganizationsData = organizationsData.filter((
    organizationData: OrganizationDataType
  ) => {
    const { id: organizationId } = organizationData
    const memberOrganizationsArray = memberData.organizations
    return memberOrganizationsArray.includes(organizationId)
  })
  return memberOrganizationsData
}
