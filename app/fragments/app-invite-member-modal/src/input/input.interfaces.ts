import { InviteButtonStateType } from '@ui/invite-button'

import { InputProps }            from '@ui/input'

import { InputValuesType }       from '../invite-member-modal.interfaces.js'

export interface InviteMemberModalInputProps extends InputProps {
  inputIndex: number
  inputValues: InputValuesType
  setInputValues: Function
  checkedSwitches: Array<string>
  setInviteButtonState: (buttonState: InviteButtonStateType) => void
}
export type HandleInputChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void
export type HandleInputDeleteType = () => void
