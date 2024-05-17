import React from 'react'

export default interface CheckboxProps {
  labelPosition?: 'left' | 'center' | 'right'
  checked?: boolean
  onCheck?: (newState: boolean) => void
  fill?: boolean
  children: React.ReactNode
}
