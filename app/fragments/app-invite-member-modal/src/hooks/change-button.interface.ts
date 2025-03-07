import type { InviteButtonStateType } from '@app/invite-button'

export interface ChangeButtonHookType {
  inputValues: Array<string>
  checkedSwitches: Array<string>
  setInviteButtonState: (buttonState: InviteButtonStateType) => void
}
