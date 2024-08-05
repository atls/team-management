import type { MemberWithOrganizationsDataType } from '@app/member-card'
import type { OrganizationDataType }            from '@globals/data'
import type { ToastType }                       from '@stores/toast-notification'

export type MemberCardsGridProps = {
  organizationsLimit: number
  organizationMembersLimit: number
}

export type UseGetMembersDataHookType = ({
  toast,
  membersData,
  setMembersData,
  organizationsData,
  setOrganizationsData,
  organizationsLimit,
  organizationMembersLimit,
}: {
  toast: ToastType
  membersData: Array<MemberWithOrganizationsDataType>
  setMembersData: (memberData: Array<MemberWithOrganizationsDataType>) => void
  organizationsData: Array<OrganizationDataType>
  setOrganizationsData: (organizationsData: Array<OrganizationDataType>) => void
  organizationsLimit: number
  organizationMembersLimit: number
}) => void
