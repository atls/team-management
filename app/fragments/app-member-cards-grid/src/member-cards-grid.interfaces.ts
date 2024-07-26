import type { ToastType } from '@stores/toast-notification'

export type MemberCardsGridProps = {
  organizationsLimit: number
  organizationMembersLimit: number
}

export type MemberCardsGridHookType = ({
  toast,
  membersData,
  organizationsLimit,
  organizationMembersLimit,
  setMembersData,
}: {
  toast: ToastType
  // TODO interface
  membersData: any
  organizationsLimit: number
  organizationMembersLimit: number
  // TODO interface
  setMembersData: (memberData: any) => void
}) => void
