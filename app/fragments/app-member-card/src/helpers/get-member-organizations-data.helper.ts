export const getMemberOrganizationsData = ({ memberData, organizationsData }) => {
  const memberOrganizationsData = organizationsData.filter((organizationData) => {
    const { id: organizationId } = organizationData
    const memberOrganizationsArray = memberData.organizations
    return memberOrganizationsArray.includes(organizationId)
  })
  return memberOrganizationsData
}
