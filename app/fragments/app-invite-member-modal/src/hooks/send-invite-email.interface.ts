import type { ToastType } from '@stores/toast-notification'

export type SendInviteEmailHookType = ({
  emails,
  selectedInvites,
  toast,
}: {
  emails: Array<string>
  selectedInvites: Array<string>
  toast: ToastType
}) => Promise<void>
