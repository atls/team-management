export function suggestedItemsReducer(suggestedItems, action) {
  switch (action.type) {
    case 'change': {
      return action.suggestedItems
    }
    case 'clean': {
      return []
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`)
    }
  }
}
