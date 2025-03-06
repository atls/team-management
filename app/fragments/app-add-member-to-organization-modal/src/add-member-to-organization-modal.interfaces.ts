import type { InviteButtonStateType }      from '@app/invite-button'
import type { OrganizationDataType }       from '@globals/data'
import type { OrganizationMemberDataType } from '@globals/data'
import type { OrganizationTeamType }       from '@globals/data'
import type { ToastType }                  from '@stores/toast-notification'
import type { ChangeEvent, Dispatch } from 'react'
import type { SetStateAction }             from 'react'

import { AddMemberToOrganizationHook }     from './add-member-to-organization-modal.hook.js'

export interface AddMemberToOrganizationModalProps {
  open: boolean
  onBackdropClick: VoidFunction
  organizationData: OrganizationDataType
}

export type SelectedUsersType = Array<number>
export type CheckedSwitchesType = Array<string>

export type HandlerSwitchType = (state: boolean, category: string) => void

export type UseButtonActiveHookType = (
  selectedUsers: SelectedUsersType,
  checkedSwitches: CheckedSwitchesType,
  setButtonActive: Function
) => void

export interface AddMemberToOrganizationHookProps {
  open: boolean
  toast: ToastType
  organizationId: string
  organizationLogin: string
  teamsData: Array<OrganizationTeamType>
  setTeamsData: (teamsData: Array<OrganizationTeamType>) => void
  selectedUsers: Array<OrganizationMemberDataType>
  inviteButtonState: InviteButtonStateType
  setInviteButtonState: Dispatch<SetStateAction<InviteButtonStateType>>
  selectedTeams: Array<OrganizationTeamType>
  setSelectedTeams: (selectedTeams: Array<OrganizationTeamType>) => void
}

export interface AddMemberToOrganizationModalHookOutput {
  switchHandler:(e: ChangeEvent<HTMLInputElement>, teamId: (number | null | undefined)) => void,
  inviteButtonClickHandler: () => void,
}