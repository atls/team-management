type ToastNotificationType = 'base' | 'error'

export type ToastNotificationProps = {
  type?: ToastNotificationType
  text?: string
  code?: number
}

type DispatchType = 'notify' | 'clean'

export type DispatchFuncType = ({
  type,
  toastNotification,
}: {
  type: DispatchType
  toastNotification?: ToastNotificationProps
}) => void

export interface ToastNotificationComponentProps {
  notificationData: ToastNotificationProps
  toastNotificationDispatch: DispatchFuncType
}
