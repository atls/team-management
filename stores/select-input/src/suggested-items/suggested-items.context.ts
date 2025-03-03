import { createContext }         from 'react'

import { SelectedItemsDispatch } from '../select-input.interfaces.js'
import { SuggestedItem }         from '../select-input.interfaces.js'

export const SuggestedItemsContext = createContext<SuggestedItem[]>([])
export const SuggestedItemsDispatchContext = createContext<SelectedItemsDispatch | null>(null)
