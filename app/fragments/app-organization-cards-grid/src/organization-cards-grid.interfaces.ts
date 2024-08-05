import { OrganizationDataType } from '@globals/data'
import { ToastType }            from '@stores/toast-notification'

export type OrganizationCardsGridProps = {
  organizationsLimit: number
  organizationMembersLimit: number
}

export type OrganizationCardsGridHookType = ({
  organizationsData,
  organizationsLimit,
  organizationMembersLimit,
  setOrganizationsData,
  toast,
}: {
  organizationsData: Array<OrganizationDataType>
  organizationsLimit: number
  organizationMembersLimit: number
  setOrganizationsData: (organizatoinsData: Array<OrganizationDataType>) => void
  toast: ToastType
}) => void
