import { createContext }          from 'react'

import { ToastNotificationProps } from '@ui/toast-notification'

export const ToastNotificationContext = createContext<ToastNotificationProps>({})
export const ToastNotificationDispatchContext = createContext<any>(null)
