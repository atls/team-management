import { InputProps as BaseInputProps } from '@atls-ui-parts/input'
import { BoxProps }                     from '@atls-ui-parts/layout'

interface SearchItemProps {
  id: number
  primaryInfo: string
  secondaryInfo?: string
  imageSrc?: string
}

export interface SelectInputProps extends BaseInputProps {
  searchItems: Array<SearchItemProps>
  parentHook: VoidFunction
  errorText?: string
}
