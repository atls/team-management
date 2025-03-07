import type { InputValueDispatch } from './select-input.interfaces.js'

import { createContext }           from 'react'

export const InputValueContext = createContext<string>('')
export const InputValueDispatchContext = createContext<InputValueDispatch | null>(null)
