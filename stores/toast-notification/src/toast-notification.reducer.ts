import { ToastNotificationProps } from '@ui/toast-notification'

import { Action }                 from './toast-notification.interfaces.js'

export function toastNotificationReducer(
  toastNotification: ToastNotificationProps,
  action: Action
): ToastNotificationProps {
  switch (action.type) {
    case 'notify': {
      return action.toastNotification || {}
    }
    case 'clean': {
      return {}
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`)
    }
  }
}
