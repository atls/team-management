export type InviteButtonStateType = 'active' | 'disabled' | 'successed' | 'activated'

export interface InviteButtonProps {
  inviteButtonState: InviteButtonStateType
  inviteButtonClickHandler: VoidFunction
  children?: JSX.Element
}
