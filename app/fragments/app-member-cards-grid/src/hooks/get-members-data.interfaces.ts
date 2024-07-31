import type { MemberWithOnbordingDataType } from '@globals/data'
import type { OrganizationDataType }        from '@globals/data'
import type { ToastType }                   from '@stores/toast-notification'

export type GetMembersDataType = ({
  toast,
  setMembersData,
  organizationsLimit,
  organizationMembersLimit,
  setOrganizationsData,
}: {
  toast: ToastType
  setMembersData: (memberData: Array<MemberWithOnbordingDataType>) => void
  setOrganizationsData: (organizationsData: Array<OrganizationDataType>) => void
  organizationsLimit: number
  organizationMembersLimit: number
}) => void
