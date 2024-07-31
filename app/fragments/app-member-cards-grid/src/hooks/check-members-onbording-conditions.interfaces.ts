import { OrganizationMemberDataType }  from '@globals/data'
import { MemberWithOnbordingDataType } from '@globals/data'

export type CheckMembersOnbordingConditions = ({
  membersData,
  membersInDefaultOrganization,
  membersWithou2fa,
}: {
  membersData: Array<OrganizationMemberDataType>
  membersInDefaultOrganization: Array<string>
  membersWithou2fa: Array<string>
}) => Promise<Array<MemberWithOnbordingDataType>>
