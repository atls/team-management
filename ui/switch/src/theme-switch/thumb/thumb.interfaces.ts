import { ThumbElementProps as BaseThumbElementProps } from '@atls-ui-parts/switch'

export interface ThumbElementProps extends BaseThumbElementProps {
  active?: boolean
  hover: boolean
}

export interface ThumbComponentProps extends BaseThumbElementProps {
  checked: boolean
  hover: boolean
}
