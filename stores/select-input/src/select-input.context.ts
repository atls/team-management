import { createContext }      from 'react'

import { InputValueDispatch } from './select-input.interfaces.js'

export const InputValueContext = createContext<string>('')
export const InputValueDispatchContext = createContext<InputValueDispatch | null>(null)
