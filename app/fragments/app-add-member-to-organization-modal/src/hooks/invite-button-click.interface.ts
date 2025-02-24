import type { InviteButtonStateType }      from '@app/invite-button'
import type { OrganizationMemberDataType } from '@globals/data'
import type { OrganizationTeamType }       from '@globals/data'
import type { ToastType }                  from '@stores/toast-notification'
import type { Dispatch }                   from 'react'
import type { SetStateAction }             from 'react'

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
  selectedUsers: Array<OrganizationMemberDataType>
  setInviteButtonState: Dispatch<SetStateAction<InviteButtonStateType>>
}) => void
