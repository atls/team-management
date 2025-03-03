import type { BaseBoxProps } from '../base-box.interfaces'

export interface BoxProps extends BaseBoxProps {
  flexDirection?: 'column' | 'row'
  width?: number | string
  height?: number | string
  minWidth?: number | string
  minHeight?: number | string
  fullWidth?: boolean
  fullHeight?: boolean
}
