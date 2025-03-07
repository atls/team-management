import type { OrganizationDataType } from '@globals/data'
import type { ToastType }            from '@stores/toast-notification'

export type GetOrganizationsDataType = ({
  toast,
  setOrganizationsData,
  organizationsLimit,
  organizationMembersLimit,
}: {
  toast: ToastType
  setOrganizationsData: (organizationData: Array<OrganizationDataType>) => void
  organizationsLimit: number
  organizationMembersLimit: number
}) => Promise<void>
