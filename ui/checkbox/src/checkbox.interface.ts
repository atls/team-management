import React from 'react'

export default interface CheckboxProps {
  labelPosition?: 'start' | 'center' | 'end'
  checked?: boolean
  onCheck?: (newState: boolean) => void
  fill?: boolean
  children: React.ReactNode
}
