import type { SelectedItem }          from '../select-input.interfaces.js'
import type { SelectedItemsDispatch } from '../select-input.interfaces.js'

import { createContext }              from 'react'

export const SelectedItemsContext = createContext<Array<SelectedItem> | null>(null)
export const SelectedItemsDispatchContext = createContext<SelectedItemsDispatch | null>(null)
