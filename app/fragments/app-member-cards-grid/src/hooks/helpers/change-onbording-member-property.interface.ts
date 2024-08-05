import type { MemberWithOrganizationsDataType } from '@app/member-card'

export type ChangeOnbordingMemberPropertyType = (
  memberData: MemberWithOrganizationsDataType,
  changeConditionName: string,
  newConditionValue?: boolean
) => MemberWithOrganizationsDataType
