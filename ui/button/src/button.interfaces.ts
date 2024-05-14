import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

export type ButtonVariant =
  | 'blackBackgroundButton'
  | 'whiteBackgroundButton'
  | 'transparentBackground'
  | 'transparentBackgroundPurpleText'
  | 'darkToPurpleBackground'
  | 'purpleBackground'
  | 'whiteBackground'
  | 'transparentWhiteToPurpleBackground'
  | 'transparentWhiteToGrayBackground'
  | 'borderWhiteToWhiteBackground'
  | 'transparentWhiteBackgroundWhiteBorder'
  | 'darkToPurpleBackgroundWithWhiteBorder'
  | 'smokyWhiteBackground'
  | 'transparentWhiteBackground'
  | 'veryTransparentSmokyWhiteBackground'

export type ButtonSize =
  | 'withoutPaddingMicroHeight'
  | 'mediumPaddingNormalHeight'
  | 'withoutPaddingBigHeight'
  | 'withoutPaddingMediumHeight'
  | 'mediumPaddingBigHeight'
  | 'middlingPaddingNormalHeight'
  | 'middlingPaddingMediumHeight'
  | 'littlePaddingMediumHeight'
  | 'littlePaddingSemiMediumHeight'
  | 'massivePaddingGiantHeight'
  | 'semiMediumPaddingHugeHeight'
  | 'littlePaddingSemiRegularHeight'
  | 'withoutPaddingSemiGiantHeight'
  | 'withoutPaddingSemiRegularHeight'
  | 'withoutPaddingSemiBigHeight'
  | 'littlePaddingMicroHeight'
  | 'middlingPaddingSemiBigHeight'
  | 'semiLittlePaddingMicroHeight'
  | 'semiLittlePaddingSemiMediumHeight'
  | 'middlingRoundedPaddingtStyles'

export interface ButtonProps extends BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  ref?: any
  iconSvg?: object
  valueRadius?: string | object
  valueWidth?: string | object
  valueHeight?: string | object
  valueBackground?: string | object
  horizontalLocation?: 'left' | 'right'
  boxShadow?: string
}
