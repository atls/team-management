import type { OrganizationMemberDataType } from '@globals/data'
import type { ToastType }                  from '@stores/toast-notification'

export type RemoveMemberType = ({
  organizationLogin,
  removeMemberLogin,
  membersData,
  setMembersData,
  toast,
}: {
  organizationLogin: string
  removeMemberLogin: string
  membersData: Array<OrganizationMemberDataType>
  setMembersData: (newMembersData: Array<OrganizationMemberDataType>) => void
  toast: ToastType
}) => void
