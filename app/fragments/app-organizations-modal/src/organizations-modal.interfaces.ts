import type { OrganizationDataType } from '@globals/data'

export interface OrganizationsModalProps {
  organizationsData: Array<OrganizationDataType>
  setOrganizationsData: (organizationsData: Array<OrganizationDataType>) => void
  memberLogin: string
  open: boolean
  onBackdropClick: () => void
}
