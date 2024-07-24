import type { OrganizationMemberType } from '@globals/data'
import type { ToastType }              from '@stores/toast-notification'

export type RemoveMemberType = ({
  organizationLogin,
  removeMemberLogin,
  membersData,
  setMembersData,
  toast,
}: {
  organizationLogin: string
  removeMemberLogin: string
  membersData: Array<OrganizationMemberType>
  setMembersData: (newMembersData: Array<OrganizationMemberType>) => void
  toast: ToastType
}) => void
