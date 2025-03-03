import { createContext }         from 'react'

import { SelectedItem }          from '../select-input.interfaces.js'
import { SelectedItemsDispatch } from '../select-input.interfaces.js'

export const SelectedItemsContext = createContext<SelectedItem[] | null>(null)
export const SelectedItemsDispatchContext = createContext<SelectedItemsDispatch | null>(null)
