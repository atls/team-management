import { InputProps }      from '@ui/input'

import { InputValuesType } from '../add-member-modal.interfaces.js'

export interface AddMemberModalInputProps extends InputProps {
  inputIndex: number
  inputValues: InputValuesType
  setInputValues: Function
}
export type HandleInputChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void
export type HandleInputDeleteType = () => void
