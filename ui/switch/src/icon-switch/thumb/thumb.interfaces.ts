import type { ThumbElementProps } from '@atls-ui-parts/switch'
import type { JSX }               from 'react'

export interface IconThumbElementProps extends ThumbElementProps {
  children: JSX.Element
}

export interface ThumbProps {
  checked: boolean
  children: JSX.Element | React.ReactNode
}
