type ToastNotificationType = 'base' | 'error'

export type ToastNotificationProps = {
  type?: ToastNotificationType
  text?: string
  code?: number
}

export type DispatchType = 'clean' | 'notify'

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

export interface ToastNotificationHookProps {
  toastNotificationDispatch: DispatchFuncType
  isHide: boolean
  setHide: (value: boolean) => void
  text?: string
}
