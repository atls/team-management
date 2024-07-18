import { createContext }          from 'react'

import { ToastNotificationProps } from './toast-notification.interfaces.js'

export const ToastNotificationContext = createContext<ToastNotificationProps>({})
export const ToastNotificationDispatchContext = createContext<any>(null)
