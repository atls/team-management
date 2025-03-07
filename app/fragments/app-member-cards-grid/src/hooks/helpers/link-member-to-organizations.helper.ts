import type { MemberWithOrganizationsDataType } from '@app/member-card'

import type { LinkMemberToOrganizationsProps }  from './get-unique-items.interfaces.js'

export const linkMemberToOrganizations = ({
  uniqueMembersData,
  memberOrganizations,
}: LinkMemberToOrganizationsProps): Array<MemberWithOrganizationsDataType> => {
  const linkedMembersData = uniqueMembersData.map((memberData) => {
    const { id: memberId } = memberData
    return {
      ...memberData,
      organizations: memberOrganizations[memberId],
      onbordingData: [],
    }
  })

  return linkedMembersData
}
