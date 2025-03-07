import type { DispatchType }           from '@ui/toast-notification'
import type { ToastNotificationProps } from '@ui/toast-notification'

export type Action = {
  type: DispatchType
  toastNotification?: ToastNotificationProps
}

export type ToastNotificationDispatch = (action: Action) => void
