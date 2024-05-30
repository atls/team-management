import { InputProps as BaseInputProps } from '@atls-ui-parts/input'
import { BoxProps }                     from '@atls-ui-parts/layout'

export interface InputProps extends BaseInputProps {
  errorText?: string
  deleteButton?: boolean
}
export interface InputContainerProps extends BoxProps {
  deleteButton?: boolean
}
