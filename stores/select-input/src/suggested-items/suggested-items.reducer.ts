import { Reducer }              from 'react'

import { SuggestedItem }        from '../select-input.interfaces.js'
import { SuggestedItemsAction } from '../select-input.interfaces.js'

export const suggestedItemsReducer: Reducer<SuggestedItem[], SuggestedItemsAction> = (
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
