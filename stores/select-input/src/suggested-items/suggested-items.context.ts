import type { SuggestedItem }                         from '../select-input.interfaces.js'

import type { SuggestedItemsDispatch } from '../select-input.interfaces.js'

import { createContext }                              from 'react'

export const SuggestedItemsContext = createContext<Array<SuggestedItem>>([])
export const SuggestedItemsDispatchContext = createContext<SuggestedItemsDispatch | null>(null)
