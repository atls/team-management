import type { MemberWithOrganizationsDataType } from '@app/member-card'

export type GetMembersWithOnbordingDataType = ({
  membersData,
  defaultOrganizationMemberIds,
  without2faMemberIds,
}: {
  membersData: Array<MemberWithOrganizationsDataType>
  defaultOrganizationMemberIds: Array<string>
  without2faMemberIds: Array<string>
}) => Promise<Array<MemberWithOrganizationsDataType>>
