import { InviteButtonStateType } from '@app/invite-button'

export type SetButtonActiveType = ({
  inviteButtonState,
  selectedUsers,
  setInviteButtonState,
}: {
  inviteButtonState: InviteButtonStateType
  selectedUsers: Array<any>
  setInviteButtonState: (buttonState: InviteButtonStateType) => void
}) => void
