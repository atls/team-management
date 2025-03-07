'use client'

import type { PropsWithChildren }           from 'react'
import type { FC }                          from 'react'

import { useReducer }                       from 'react'
import React                                from 'react'

import { ToastNotification }                from '@ui/toast-notification'

import { ToastNotificationContext }         from './toast-notification.context.js'
import { ToastNotificationDispatchContext } from './toast-notification.context.js'
import { toastNotificationReducer }         from './toast-notification.reducer.js'

export const ToastNotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toastNotification, toastNotificationDispatch] = useReducer(toastNotificationReducer, {})

  return (
    <ToastNotificationDispatchContext.Provider value={toastNotificationDispatch}>
      <ToastNotificationContext.Provider value={toastNotification}>
        <ToastNotification
          notificationData={toastNotification}
          toastNotificationDispatch={toastNotificationDispatch}
        />
        {children}
      </ToastNotificationContext.Provider>
    </ToastNotificationDispatchContext.Provider>
  )
}
