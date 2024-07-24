import React                             from 'react'
import { useReducer }                    from 'react'

import { InputValueContext }             from './select-input.context.js'
import { InputValueDispatchContext }     from './select-input.context.js'
import { SelectedItemsContext }          from './selected-items/index.js'
import { SelectedItemsDispatchContext }  from './selected-items/index.js'
import { SuggestedItemsDispatchContext } from './suggested-items/index.js'
import { SuggestedItemsContext }         from './suggested-items/index.js'
import { inputValueReducer }             from './select-input.reducer.js'
import { selectedItemsReducer }          from './selected-items/index.js'
import { suggestedItemsReducer }         from './suggested-items/index.js'

export const SelectInputProvider = ({ children }) => {
  const [selectedItems, selectedItemsDispatch] = useReducer(selectedItemsReducer, [])
  const [suggestedItems, suggestedItemsDispatch] = useReducer(suggestedItemsReducer, [])
  const [inputValue, inputValueDispatch] = useReducer(inputValueReducer, '')

  return (
    <InputValueContext.Provider value={inputValue}>
      <InputValueDispatchContext.Provider value={inputValueDispatch}>
        <SuggestedItemsContext.Provider value={suggestedItems}>
          <SuggestedItemsDispatchContext.Provider value={suggestedItemsDispatch}>
            <SelectedItemsContext.Provider value={selectedItems}>
              <SelectedItemsDispatchContext.Provider value={selectedItemsDispatch}>
                {children}
              </SelectedItemsDispatchContext.Provider>
            </SelectedItemsContext.Provider>
          </SuggestedItemsDispatchContext.Provider>
        </SuggestedItemsContext.Provider>
      </InputValueDispatchContext.Provider>
    </InputValueContext.Provider>
  )
}
