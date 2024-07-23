import { useContext }                    from 'react'

import { InputValueContext }             from '../select-input.context.js'
import { InputValueDispatchContext }     from '../select-input.context.js'
import { SelectedItemsDispatchContext }  from '../selected-items/index.js'
import { SelectedItemsContext }          from '../selected-items/index.js'
import { SuggestedItemsContext }         from '../suggested-items/index.js'
import { SuggestedItemsDispatchContext } from '../suggested-items/index.js'

export const useSelectInput = () => {
  const inputValue = useContext(InputValueContext)
  const inputValueDispatch = useContext(InputValueDispatchContext)
  const selectedItems = useContext(SelectedItemsContext)
  const selectedItemsDispatch = useContext(SelectedItemsDispatchContext)
  const suggestedItems = useContext(SuggestedItemsContext)
  const suggestedItemsDispatch = useContext(SuggestedItemsDispatchContext)

  return {
    inputValue,
    selectedItems,
    suggestedItems,
    setInputValue: (value: string) => {
      inputValueDispatch({
        type: 'set',
        inputValue: value,
      })
    },
    cleanSelectedItems: () => {
      selectedItemsDispatch({
        type: 'clean',
      })
    },
    cleanSuggestedItems: () => {
      suggestedItemsDispatch({
        type: 'clean',
      })
    },
    setSuggestedItems: (suggestedItems) => {
      suggestedItemsDispatch({
        type: 'change',
        suggestedItems: suggestedItems,
      })
    },
  }
}
