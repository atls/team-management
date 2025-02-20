import { useEffect }                  from 'react'

import { HIDE_DELAY_5SEC }            from './toast-notification.constants.js'
import { ToastNotificationHookProps } from './toast-notification.interfaces.js'
import { checkUrlErrorHook }          from './hooks/index.js'

export const ToastNotificationHook = ({
  toastNotificationDispatch,
  isHide,
  setHide,
  text,
}: ToastNotificationHookProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      toastNotificationDispatch({
        type: 'notify',
        toastNotification: checkUrlErrorHook(),
      })
    }
  }, [toastNotificationDispatch])

  useEffect(() => {
    setHide(false)
  }, [text, setHide])

  useEffect(() => {
    if (!isHide) {
      setTimeout(() => {
        setHide(true)
        toastNotificationDispatch({
          type: 'clean',
        })
      }, HIDE_DELAY_5SEC)
    }
  }, [isHide, setHide, toastNotificationDispatch])
}
