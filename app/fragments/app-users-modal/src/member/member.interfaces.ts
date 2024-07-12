import { OrganizationMemberDataType } from '@globals/interfaces'

export interface MemberProps {
  memberData: OrganizationMemberDataType
  onDeleteMemberClick: VoidFunction
  devider: boolean
  viewerCanAdminister: boolean
}
