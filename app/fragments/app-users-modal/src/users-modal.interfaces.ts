import type { OrganizationDataType } from '@globals/interfaces'

export interface UsersModalProps {
  open: boolean
  onBackdropClick: VoidFunction
  organizationData: OrganizationDataType
}
