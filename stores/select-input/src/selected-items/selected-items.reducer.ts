import { SelectedItem }                      from '../select-input.interfaces.js'

import { SelectedItemsAction } from '../select-input.interfaces.js'

export function selectedItemsReducer(selectedItems: SelectedItem[], action: SelectedItemsAction) {
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
      throw new Error('Unknown action')
    }
  }
}
