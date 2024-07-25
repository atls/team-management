export type InviteButtonStateType = 'active' | 'successed' | 'disabled'

export interface InviteButtonProps {
  inviteButtonState: InviteButtonStateType
  inviteButtonClickHandler: VoidFunction
  children?: JSX.Element
}
