import type { OrganizationMemberType } from '@globals/data'
import type { ToastType }              from '@store/toast-notification'

export type GetOrganizationMembersType = ({
  organizationId,
  setMembersData,
  toast,
}: {
  organizationId: number
  setMembersData: (membersData: Array<OrganizationMemberType>) => void
  toast: ToastType
}) => void
