'use client'

import React                                from 'react'
import { PropsWithChildren }                from 'react'
import { FC }                               from 'react'
import { useReducer }                       from 'react'

import { ToastNotification }                from '../toast-notification.component.js'
import { ToastNotificationContext }         from './context.js'
import { ToastNotificationDispatchContext } from './context.js'
import { toastNotificationReducer }         from '../reducer/index.js'

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
