import type { InputProps as BaseInputProps } from '@ui/input'

interface SearchItemProps {
  id: number
  primaryInfo: string
  secondaryInfo?: string
  imageSrc?: string
}

export interface SelectInputProps extends BaseInputProps {
  placeholder?: string
  value?: string
  searchItems?: Array<SearchItemProps>
  parentHook?: Function
  onChange?: VoidFunction
  onChangeNative?: VoidFunction
  errorText?: string
}
