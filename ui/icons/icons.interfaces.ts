/* eslint-disable */
import type { SVGProps } from 'react'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'margin' | 'stroke'> {
  color?: any | boolean | string
  stroke?: any | boolean | string
  margin?: string
}
