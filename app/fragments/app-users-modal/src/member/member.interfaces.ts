import { OrganizationMemberType } from '@globals/data'

export interface MemberProps {
  memberData: OrganizationMemberType
  onDeleteMemberClick: (removeMemberLogin: string) => void
  devider: boolean
  viewerCanAdminister: boolean
}
