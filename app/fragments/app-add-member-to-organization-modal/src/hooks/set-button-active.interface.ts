import type { InviteButtonStateType }      from '@app/invite-button'
import type { OrganizationMemberDataType } from '@globals/data'

export type SetButtonActiveType = ({
  inviteButtonState,
  selectedUsers,
  setInviteButtonState,
}: {
  inviteButtonState: InviteButtonStateType
  selectedUsers: Array<OrganizationMemberDataType>
  setInviteButtonState: (buttonState: InviteButtonStateType) => void
}) => void
