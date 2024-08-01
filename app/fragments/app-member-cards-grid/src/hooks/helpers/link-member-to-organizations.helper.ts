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
