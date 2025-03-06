import type { InviteButtonStateType } from '@app/invite-button'
import type { InputProps }            from '@ui/input'
import type { Dispatch }              from 'react'
import type { SetStateAction }        from 'react'

import type { InputValuesType }       from '../invite-member-modal.interfaces.js'

interface FormatMessageOpts {
  id: string
  defaultMessage?: string
}

export interface InviteMemberModalInputProps extends InputProps {
  inputIndex: number
  inputValues: InputValuesType
  setInputValues: Dispatch<SetStateAction<InputValuesType>>
  checkedSwitches: Array<string>
  setInviteButtonState: (buttonState: InviteButtonStateType) => void
}

export interface InputHookProps extends InviteMemberModalInputProps {
  setErrorText: Dispatch<SetStateAction<string>>
  formatMessage: (opts: FormatMessageOpts) => string
}

export type HandleInputChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void
export type HandleInputDeleteType = () => void

export interface InputHookOutput {
  handleInputChange: HandleInputChangeType
  handleInputDelete: HandleInputDeleteType
}
