import { InputProps } from '@atls-ui-parts/input'

import { BoxProps }   from '@ui/layout'

export interface BaseInputProps extends InputProps {
  errorText?: string
  deleteButton?: boolean
  deleteHook?: false | (() => void)
}
export interface BaseInputBoxProps extends BoxProps {
  deleteButton?: boolean
}
