import type { GetMemberIdsInDefaultOrganizationType } from './get-member-ids-in-default-organization.interface.js'

export const getMemberIdsInDefaultOrganization: GetMemberIdsInDefaultOrganizationType = (
  membersData
) => {
  const output: Array<string> = []

  for (const memberData of membersData) {
    const { id: memberId } = memberData
    output.push(memberId)
  }

  return output
}
