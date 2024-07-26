import type { ToastType } from '@stores/toast-notification'

// TODO interfaces
// TODO setMembersDataInterface (member data interface)
export type GetMembersDataType = ({
  toast,
  setMembersData,
  organizationsLimit,
  organizationMembersLimit,
}: {
  toast: ToastType
  setMembersData: (memberData: any) => void
  organizationsLimit: number
  organizationMembersLimit: number
}) => void
