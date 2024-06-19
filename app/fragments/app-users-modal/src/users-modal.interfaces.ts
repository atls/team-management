export type MemberDataType = {
  memberId: number
  memberName: string
  memberPosition: string
  memberAvatarSrc: string
}

export type OrganizationDataType = {
  organizationTitle: string
  organizationDescription: string
  organizationMembersQuantity: number
  organizationCoverSrc: string
}

export interface UsersModalProps {
  open: boolean
  onBackdropClick: VoidFunction
  organizationData: OrganizationDataType
}
