export const fillMemberToOrganizations = ({
  memberData,
  organizationData,
  memberOrganizations,
}) => {
  const { id: memberId } = memberData
  const { id: organizationId } = organizationData

  if (!memberOrganizations[memberId]) {
    memberOrganizations[memberId] = []
  }
  memberOrganizations[memberId].push(organizationId)
}

export const linkMemberToOrganizations = ({ uniqueMembersData, memberOrganizations }) => {
  const linkedMembersData = uniqueMembersData.map((memberData) => {
    const { id: memberId } = memberData
    return {
      ...memberData,
      organizations: memberOrganizations[memberId],
    }
  })

  return linkedMembersData
}
