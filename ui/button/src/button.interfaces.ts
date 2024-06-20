import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant =
  | 'blackSolidBackgroundButton'
  | 'blackBackgroundButton'
  | 'whiteBackgroundButton'
  | 'blueBackgroundButton'
  | 'transparentBackgroundButton'
  | 'lightBlueBackgroundButton'
  | 'transparentBlueBackgroundButton'

export type ButtonSize =
  | 'middlingRoundedPadding'
  | 'smallRoundedPadding'
  | 'bigRoundedPadding'
  | 'microRoundedPadding'
  | 'microIncreasedRoundedPadding'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  boxShadow?: string
  ref?: any
  iconSvg?: React.ReactNode
  valueRadius?: string | Record<string, string>
  valueWidth?: string | Record<string, string>
  valueHeight?: string | Record<string, string>
  valueBackground?: string | Record<string, string>
  horizontalLocation?: 'left' | 'right'
}
