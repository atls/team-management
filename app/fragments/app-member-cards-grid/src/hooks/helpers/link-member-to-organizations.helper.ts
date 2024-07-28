export const linkMemberToOrganizations = ({ membersData_unique, memberOrganizations }) => {
  const linkedMembersData = membersData_unique.map((memberData) => {
    const { id: memberId } = memberData
    return {
      ...memberData,
      organizations: memberOrganizations[memberId],
    }
  })

  return linkedMembersData
}
