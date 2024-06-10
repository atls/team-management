import { SVGProps } from 'react'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'stroke' | 'margin'> {
  color?: string | boolean | any
  stroke?: string | boolean | any
  margin?: string
}
