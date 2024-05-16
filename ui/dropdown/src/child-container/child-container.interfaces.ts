import { InputHTMLAttributes } from 'react'
import { JSX }                 from 'react'

export interface ChildContainerProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  layerProps: object
  children: JSX.Element
}
