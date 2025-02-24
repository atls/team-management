import type { OrganizationDataType, OrganizationMemberDataType, OrganizationTeamType } from '@globals/data'
import { AddMemberToOrganizationHook } from './add-member-to-organization-modal.hook.js'
import { ToastType } from '@stores/toast-notification'
import type { InviteButtonStateType } from '@app/invite-button'
import { Dispatch, SetStateAction } from 'react'

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