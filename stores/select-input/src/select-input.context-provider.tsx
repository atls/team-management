import type { FC }                       from 'react'
import type { PropsWithChildren }        from 'react'

import type { InputValueAction }         from './select-input.interfaces.js'
import type { SelectedItem }             from './select-input.interfaces.js'
import type { SelectedItemsAction }      from './select-input.interfaces.js'
import type { SuggestedItem }            from './select-input.interfaces.js'
import type { SuggestedItemsAction }     from './select-input.interfaces.js'

import { useReducer }                    from 'react'
import React                             from 'react'

import { InputValueContext }             from './select-input.context.js'
import { InputValueDispatchContext }     from './select-input.context.js'
import { SelectedItemsContext }          from './selected-items/index.js'
import { SelectedItemsDispatchContext }  from './selected-items/index.js'
import { SuggestedItemsDispatchContext } from './suggested-items/index.js'
import { SuggestedItemsContext }         from './suggested-items/index.js'
import { inputValueReducer }             from './select-input.reducer.js'
import { selectedItemsReducer }          from './selected-items/index.js'
import { suggestedItemsReducer }         from './suggested-items/index.js'

export const SelectInputProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedItems, selectedItemsDispatch] = useReducer<
    React.Reducer<Array<SelectedItem>, SelectedItemsAction>
  >(selectedItemsReducer, [])

  const [suggestedItems, suggestedItemsDispatch] = useReducer<
    React.Reducer<Array<SuggestedItem>, SuggestedItemsAction>
  >(suggestedItemsReducer, [])

  const [inputValue, inputValueDispatch] = useReducer<React.Reducer<string, InputValueAction>>(
    inputValueReducer,
    ''
  )

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
