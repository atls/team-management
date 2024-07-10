export function errorMessageReducer(errorMessage, action) {
  switch (action.type) {
    case 'set': {
      return action.errorMessage
    }
    case 'clean': {
      return {}
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`)
    }
  }
}
