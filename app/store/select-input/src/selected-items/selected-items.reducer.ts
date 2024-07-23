export function selectedItemsReducer(selectedItems, action) {
  switch (action.type) {
    case 'added': {
      return [...selectedItems, action.itemData]
    }
    case 'deleted': {
      return selectedItems.filter((selectedItem) => selectedItem.nodeId !== action.itemData.nodeId)
    }
    case 'clean': {
      return []
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`)
    }
  }
}
