import type { GetMemberOrganizationsDataType } from './get-member-organizations-data.interface.js'
import type { OrganizationDataType }           from '@globals/data'

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
