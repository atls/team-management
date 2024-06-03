import { InputProps } from '@atls-ui-parts/input'
import { BoxProps }   from '@atls-ui-parts/layout'

export interface BaseInputProps extends InputProps {
  errorText?: string
  deleteButton?: boolean
}
export interface BaseInputBoxProps extends BoxProps {
  deleteButton?: boolean
}
