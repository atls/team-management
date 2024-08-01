import type { OrganizationTeamType }       from '@globals/data'
import type { OrganizationMemberDataType } from '@globals/data'
import type { ToastType }                  from '@stores/toast-notification'

export type InviteButtonClickType = ({
  organizationLogin,
  selectedTeams,
  toast,
  selectedUsers,
  setInviteButtonState,
}: {
  organizationLogin: string
  selectedTeams: string
  toast: ToastType
  selectedUsers: Array<OrganizationMemberDataType>
  setInviteButtonState: (state: string) => void
}) => void
