import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant =
  | 'blackBackgroundButton'
  | 'whiteBackgroundButton'
  | 'blueBackgroundButton'
  | 'transparentBackgroundButton'
  | 'lightBlueBackgroundButton'

export type ButtonSize = 'middlingRoundedPadding' | 'smallRoundedPadding' | 'bigRoundedPadding'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  ref?: any
  iconSvg?: React.ReactNode
  valueRadius?: string | Record<string, string>
  valueWidth?: string | Record<string, string>
  valueHeight?: string | Record<string, string>
  valueBackground?: string | Record<string, string>
  horizontalLocation?: 'left' | 'right'
}
