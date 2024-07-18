'use client'

import React                                from 'react'
import { PropsWithChildren }                from 'react'
import { FC }                               from 'react'
import { useReducer }                       from 'react'

import { ToastNotification }                from './toast-notification.component.js'
import { ToastNotificationContext }         from './toast-notification.context.js'
import { ToastNotificationDispatchContext } from './toast-notification.context.js'
import { toastNotificationReducer }         from './toast-notification.reducer.js'

export const ToastNotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toastNotification, toastNotificationDispatch] = useReducer(toastNotificationReducer, {})

  return (
    <ToastNotificationDispatchContext.Provider value={toastNotificationDispatch}>
      <ToastNotificationContext.Provider value={toastNotification}>
        <ToastNotification
          toastNotification={toastNotification}
          toastNotificationDispatch={toastNotificationDispatch}
        />
        {children}
      </ToastNotificationContext.Provider>
    </ToastNotificationDispatchContext.Provider>
  )
}
