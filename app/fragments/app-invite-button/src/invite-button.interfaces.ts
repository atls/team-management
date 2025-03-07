import type { JSX } from 'react'

export type InviteButtonStateType = 'activated' | 'active' | 'disabled' | 'successed'

export interface InviteButtonProps {
  inviteButtonState: InviteButtonStateType
  inviteButtonClickHandler: VoidFunction
  children?: JSX.Element
}

export interface InviteButtonOutput {
  SUCCESS_COLOR: string
  ICON_SIZE: number
}
