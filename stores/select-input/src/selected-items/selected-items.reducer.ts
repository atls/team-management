import type { SelectedItem }        from '../select-input.interfaces.js'
import type { SelectedItemsAction } from '../select-input.interfaces.js'

export function selectedItemsReducer(
  selectedItems: Array<SelectedItem>,
  action: SelectedItemsAction
): Array<SelectedItem> {
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
