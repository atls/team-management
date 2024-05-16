import { InputHTMLAttributes } from 'react'

export interface ButtonProps extends InputHTMLAttributes<any> {
  triggerProps: object
  onClick: () => void
  isOpen: boolean
}
