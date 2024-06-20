export interface AddMemberModalProps {
  open: boolean
  onBackdropClick: VoidFunction
}

export type InputValuesType = Array<string>

export type CheckedSwitchesType = Array<string>

export type HandlerSwitchType = (state: boolean, category: string) => void

export type HandleAddInputClickType = () => void

export type UseButtonActiveHookType = (
  checkedSwitches: CheckedSwitchesType,
  setButtonActive: Function
) => void

export type UseUpdateInputValuesHookType = (
  inputValues: InputValuesType,
  setInputValues: Function
) => Function
