export type InviteButtonStateType = 'active' | 'disabled' | 'successed'

export interface InviteButtonProps {
  inviteButtonState: InviteButtonStateType
  inviteButtonClickHandler: VoidFunction
  children?: JSX.Element
}
