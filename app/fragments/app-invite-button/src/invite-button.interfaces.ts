export type InviteButtonStateType = 'active' | 'successed' | 'disabled'

export interface InviteButtonProps {
  modalButtonState: string
  inviteButtonClickHandler: VoidFunction
}
