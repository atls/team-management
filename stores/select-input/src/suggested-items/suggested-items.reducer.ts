import type { Reducer }              from 'react'

import type { SuggestedItem }        from '../select-input.interfaces.js'
import type { SuggestedItemsAction } from '../select-input.interfaces.js'

export const suggestedItemsReducer: Reducer<Array<SuggestedItem>, SuggestedItemsAction> = (
  suggestedItems,
  action
) => {
  switch (action.type) {
    case 'change': {
      return action.suggestedItems
    }
    case 'clean': {
      return []
    }
    default: {
      throw new Error('Unknown action')
    }
  }
}
