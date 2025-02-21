import type { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant =
  | 'blackBackgroundButton'
  | 'blackSolidBackgroundButton'
  | 'blueBackgroundButton'
  | 'lightBlueBackgroundButton'
  | 'transparentBackgroundButton'
  | 'transparentBlueBackgroundButton'
  | 'whiteBackgroundButton'

export type ButtonSize =
  | 'bigRoundedPadding'
  | 'microIncreasedRoundedPadding'
  | 'microRoundedPadding'
  | 'middlingRoundedPadding'
  | 'smallRoundedPadding'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  hoverDisabled?: boolean
  size?: ButtonSize
  active?: boolean
  boxShadow?: string
  ref?: any
  iconSvg?: React.ReactNode
  valueRadius?: Record<string, string> | string
  valueWidth?: Record<string, string> | string
  valueHeight?: Record<string, string> | string
  valueBackground?: Record<string, string> | string
  horizontalLocation?: 'left' | 'right'
}
