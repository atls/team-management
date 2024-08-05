import { OrganizationMemberDataType } from '@globals/data'

export interface MemberProps {
  memberData: OrganizationMemberDataType
  onDeleteMemberClick: (removeMemberLogin: string) => void
  devider: boolean
  viewerCanAdminister: boolean
}
