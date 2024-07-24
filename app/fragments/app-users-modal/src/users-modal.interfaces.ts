import type { OrganizationDataType } from '@globals/data'

export interface UsersModalProps {
  open: boolean
  onBackdropClick: VoidFunction
  organizationData: OrganizationDataType
}
