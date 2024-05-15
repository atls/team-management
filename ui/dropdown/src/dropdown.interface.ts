import {InputHTMLAttributes} from 'react'

export interface DropdownProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
	children: JSX.Element
}
