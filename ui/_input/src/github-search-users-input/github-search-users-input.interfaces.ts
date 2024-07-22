import { InputProps as BaseInputProps } from '@ui/input'

export interface SelectInputProps extends BaseInputProps {
  value?: string
  parentHook: Function
  modalButtonState: string
  onChange?: VoidFunction
  onChangeNative?: VoidFunction
  errorText?: string
}
