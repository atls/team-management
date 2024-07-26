export const getUniqueMembers = (allMembersData) => {
  const filterKey = 'id'
  const uniqueMembersData = [
    ...new Map(allMembersData.map((memberData) => [memberData[filterKey], memberData])).values(),
  ]
  return uniqueMembersData
}
