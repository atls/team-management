import { OrganizationMemberDataType } from '@globals/interfaces'

export interface MemberProps {
  memberData: OrganizationMemberDataType
  onDeleteMemberClick: (removeMemberLogin: string) => void
  devider: boolean
  viewerCanAdminister: boolean
}
