import type { ToastNotificationProps }    from '@ui/toast-notification'

import type { ToastNotificationDispatch } from './toast-notification.interfaces.js'

import { createContext }                  from 'react'

export const ToastNotificationContext = createContext<ToastNotificationProps>({})
export const ToastNotificationDispatchContext = createContext<ToastNotificationDispatch | null>(
  null
)
