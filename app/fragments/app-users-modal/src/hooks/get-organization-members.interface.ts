import type { OrganizationMemberDataType } from '@globals/data'
import type { ToastType }                  from '@stores/toast-notification'

export type GetOrganizationMembersType = ({
  organizationId,
  setMembersData,
  toast,
}: {
  organizationId: string
  setMembersData: (membersData: Array<OrganizationMemberDataType>) => void
  toast: ToastType
}) => void
