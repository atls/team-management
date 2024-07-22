import React                             from 'react'
import { useReducer }                    from 'react'

import { InputValueContext }             from '../select-input.context.js'
import { InputValueDispatchContext }     from '../select-input.context.js'
import { SelectedItemsDispatchContext }  from '../selected-items/selected-items.context.js'
import { SelectedItemsContext }          from '../selected-items/selected-items.context.js'
import { SuggestedItemsContext }         from '../suggested-items/suggested-items.context.js'
import { SuggestedItemsDispatchContext } from '../suggested-items/suggested-items.context.js'
import { inputValueReducer }             from '../select-input.reducer.js'
import { selectedItemsReducer }          from '../selected-items/selected-items.reducer.js'
import { suggestedItemsReducer }         from '../suggested-items/suggested-items.reducer.js'

export const SelectInputProvider = ({ children }) => {
  const [selectedItems, selectedItemsDispatch] = useReducer(selectedItemsReducer, [])
  const [suggestedItems, suggestedItemsDispatch] = useReducer(suggestedItemsReducer, [])
  const [inputValue, inputValueDispatch] = useReducer(inputValueReducer, '')
  return (
    <SuggestedItemsContext.Provider value={suggestedItems}>
      <SuggestedItemsDispatchContext.Provider value={suggestedItemsDispatch}>
        <SelectedItemsContext.Provider value={selectedItems}>
          <SelectedItemsDispatchContext.Provider value={selectedItemsDispatch}>
            <InputValueContext.Provider value={inputValue}>
              <InputValueDispatchContext.Provider value={inputValueDispatch}>
                {children}
              </InputValueDispatchContext.Provider>
            </InputValueContext.Provider>
          </SelectedItemsDispatchContext.Provider>
        </SelectedItemsContext.Provider>
      </SuggestedItemsDispatchContext.Provider>
    </SuggestedItemsContext.Provider>
  )
}
