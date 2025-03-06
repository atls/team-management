import type { Dispatch }       from 'react'
import type { SetStateAction } from 'react'
import type { JSX }            from 'react'

export interface InviteMemberModalProps {
  open: boolean
  onBackdropClick: VoidFunction
}

export type InputValuesType = Array<string>

export type CheckedSwitchesType = Array<string>

export type HandlerSwitchType = (state: boolean, category: string) => void

export type HandleAddInputClickType = () => void

export type UseButtonActiveHookType = (
  checkedSwitches: CheckedSwitchesType,
  setButtonActive: Dispatch<SetStateAction<boolean>>
) => void

export type UseUpdateInputValuesHookType = (
  inputValues: InputValuesType,
  setInputValues: Dispatch<SetStateAction<InputValuesType>>
) => Function

export interface InviteMemberModalOutput {
  switchHandler: HandlerSwitchType
  addInputClickHandler: HandleAddInputClickType
  inviteButtonClickHandler: () => Promise<void>
}

export interface SwitchDataItem {
  icon: JSX.Element
  switchData: string
}
