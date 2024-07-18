export function toastNotificationReducer(toastNotification, action) {
  switch (action.type) {
    case 'set': {
      return action.toastNotification
    }
    case 'clean': {
      return {}
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`)
    }
  }
}
