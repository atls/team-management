import type { OrganizationDataType } from '@globals/data'
import type { ToastType }            from '@stores/toast-notification'

export type GetOrganizationDataType = ({
  setOrganizationsData,
  toast,
}: {
  setOrganizationsData: (organizationData: OrganizationDataType) => void
  toast: ToastType
}) => void
