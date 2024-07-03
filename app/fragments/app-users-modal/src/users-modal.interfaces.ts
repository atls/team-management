import type { OrganizationDataType } from '@globals/interfaces'

export type MemberDataType = {
  memberId: number
  memberName: string
  memberPosition: string
  memberAvatarSrc: string
}

export interface UsersModalProps {
  open: boolean
  onBackdropClick: VoidFunction
  organizationData: OrganizationDataType
}
