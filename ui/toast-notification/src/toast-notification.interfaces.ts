export interface ToastNotificationProps {
  text?: string
  code?: number
}

type DispatchType = 'set'

export interface ToastNotificationComponentProps {
  toastNotification: ToastNotificationProps
  toastNotificationDispatch: ({
    type,
    toastNotification,
  }: {
    type: DispatchType
    toastNotification: ToastNotificationProps
  }) => void
}
