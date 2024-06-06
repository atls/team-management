import { InputProps } from '@ui/input'

export interface AddMemberModalInputProps extends InputProps {
  inputIndex: number
  updateInputValuesHook: Function
}
export type HandleInputChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void
export type HandleInputDeleteType = () => void
