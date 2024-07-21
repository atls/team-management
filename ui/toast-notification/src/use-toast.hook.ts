import { useContext }                       from 'react'

import { ToastNotificationDispatchContext } from './toast-notification.context.js'
import { DispatchFuncType }                 from './toast-notification.interfaces.js'

export const useToast = () => {
  const toastNotificationDispatch = useContext(ToastNotificationDispatchContext) as DispatchFuncType

  return {
    notify: (text: string) =>
      toastNotificationDispatch({
        type: 'notify',
        toastNotification: { type: 'base', text, code: 0 },
      }),
    error: (text: string, code = 0) =>
      toastNotificationDispatch({
        type: 'notify',
        toastNotification: { type: 'error', text, code },
      }),
  }
}
