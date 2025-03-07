import type { DispatchFuncType }            from '@ui/toast-notification'

import type { UseToastOutput }              from './use-toast.interface.js'

import { useContext }                       from 'react'

import { ToastNotificationDispatchContext } from '../toast-notification.context.js'

export const useToast = (): UseToastOutput => {
  const toastNotificationDispatch = useContext(ToastNotificationDispatchContext) as DispatchFuncType

  return {
    notify: (text: string): void => {
      toastNotificationDispatch({
        type: 'notify',
        toastNotification: { type: 'base', text, code: 0 },
      })
    },
    error: (text: string, code = 0): void => {
      toastNotificationDispatch({
        type: 'notify',
        toastNotification: { type: 'error', text, code },
      })
    },
  }
}
