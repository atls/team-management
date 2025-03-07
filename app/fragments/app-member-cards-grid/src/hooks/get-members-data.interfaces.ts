import type { MemberWithOrganizationsDataType } from '@app/member-card'
import type { OrganizationDataType }            from '@globals/data'
import type { ToastType }                       from '@stores/toast-notification'

export type GetMembersDataType = ({
  toast,
  setMembersData,
  organizationsLimit,
  organizationMembersLimit,
  setOrganizationsData,
}: {
  toast: ToastType
  setMembersData: (memberData: Array<MemberWithOrganizationsDataType>) => void
  setOrganizationsData: (organizationsData: Array<OrganizationDataType>) => void
  organizationsLimit: number
  organizationMembersLimit: number
}) => Promise<void>
