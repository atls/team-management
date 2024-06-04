import { InputProps } from '@ui/input'

export interface AddMemberModalInputProps extends InputProps {
  inputIndex: number
  updateInputValuesHook: (inputIndex: any, value: any) => void
}
