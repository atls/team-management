import type { SuggestedItem }            from '../select-input.interfaces.js'
import type { UseSelectedInputOutput }   from './use-selected-input.interfaces.js'

import { useContext }                    from 'react'

import { InputValueContext }             from '../select-input.context.js'
import { InputValueDispatchContext }     from '../select-input.context.js'
import { SelectedItemsDispatchContext }  from '../selected-items/index.js'
import { SelectedItemsContext }          from '../selected-items/index.js'
import { SuggestedItemsContext }         from '../suggested-items/index.js'
import { SuggestedItemsDispatchContext } from '../suggested-items/index.js'

export const useSelectInput = (): UseSelectedInputOutput => {
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
    setInputValue: (value: string): void => {
      inputValueDispatch?.({
        type: 'set',
        inputValue: value,
      })
    },
    cleanSelectedItems: (): void => {
      selectedItemsDispatch?.({
        type: 'clean',
      })
    },
    cleanSuggestedItems: (): void => {
      suggestedItemsDispatch?.({
        type: 'clean',
      })
    },
    setSuggestedItems: (newSuggestedItems: Array<SuggestedItem>): void => {
      suggestedItemsDispatch?.({
        type: 'change',
        suggestedItems: newSuggestedItems,
      })
    },
  }
}
