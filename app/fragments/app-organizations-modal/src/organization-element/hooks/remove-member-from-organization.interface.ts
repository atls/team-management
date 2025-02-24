import type { OrganizationDataType } from '@globals/data'
import type { ToastType }            from '@stores/toast-notification'

export type RemoveMemberFromOrganizationType = ({
  organizationLogin,
  removeMemberLogin,
  organizationsData,
  setOrganizationsData,
  toast,
}: {
  organizationLogin: string
  removeMemberLogin: string
  organizationsData: Array<OrganizationDataType>
  setOrganizationsData: (organizatoinsData: Array<OrganizationDataType>) => void
  toast: ToastType
}) => void
