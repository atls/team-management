export interface AddMemberToOrganizationModalProps {
  open: boolean
}

export type SelectedUsersType = Array<number>
export type CheckedSwitchesType = Array<string>

export type HandlerSwitchType = (state: boolean, category: string) => void

export type UseButtonActiveHookType = (
  selectedUsers: SelectedUsersType,
  checkedSwitches: CheckedSwitchesType,
  setButtonActive: Function
) => void
