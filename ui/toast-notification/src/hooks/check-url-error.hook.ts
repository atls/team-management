import type { ToastNotificationProps } from '../toast-notification.interfaces.js'

export const checkUrlErrorHook = (): ToastNotificationProps => {
  const CURRENT_URL = new URL(window.location.href)
  const { searchParams } = CURRENT_URL
  const text = searchParams.get('errorMessage') || undefined
  const code = Number(searchParams.get('errorCode')) || undefined
  return { text, code }
}
