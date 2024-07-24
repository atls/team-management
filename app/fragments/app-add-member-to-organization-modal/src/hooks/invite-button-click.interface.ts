import type { OrganizationTeamType }   from '@globals/data'
import type { OrganizationMemberType } from '@globals/data'
import type { ToastType }              from '@stores/toast-notification'

export type InviteButtonClickType = ({
  organizationLogin,
  selectedTeams,
  toast,
  selectedUsers,
  setInviteButtonState,
}: {
  organizationLogin: string
  selectedTeams: Array<OrganizationTeamType>
  toast: ToastType
  selectedUsers: Array<OrganizationMemberType>
  setInviteButtonState: (state: string) => void
}) => void
