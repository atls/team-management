import type { MemberWithOnbordingDataType } from '@app/member-card'
import type { OrganizationDataType }        from '@globals/data'
import type { ToastType }                   from '@stores/toast-notification'

export type MemberCardsGridProps = {
  organizationsLimit: number
  organizationMembersLimit: number
}

export type MemberCardsGridHookType = ({
  toast,
  membersData,
  setMembersData,
  organizationsData,
  setOrganizationsData,
  organizationsLimit,
  organizationMembersLimit,
}: {
  toast: ToastType
  membersData: Array<MemberWithOnbordingDataType>
  setMembersData: (memberData: Array<MemberWithOnbordingDataType>) => void
  organizationsData: Array<OrganizationDataType>
  setOrganizationsData: (organizationsData: Array<OrganizationDataType>) => void
  organizationsLimit: number
  organizationMembersLimit: number
}) => void
