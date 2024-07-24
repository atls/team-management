import { useContext }                       from 'react'

import { DispatchFuncType }                 from '@ui/toast-notification'

import { ToastNotificationDispatchContext } from '../toast-notification.context.js'

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
