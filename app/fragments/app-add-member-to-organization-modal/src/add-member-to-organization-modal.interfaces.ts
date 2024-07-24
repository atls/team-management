import type { OrganizationDataType } from '@globals/data'

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
