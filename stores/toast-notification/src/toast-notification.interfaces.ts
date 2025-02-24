import { DispatchType }           from '@ui/toast-notification'
import { ToastNotificationProps } from '@ui/toast-notification'

export type Action = {
  type: DispatchType
  toastNotification?: ToastNotificationProps
}
