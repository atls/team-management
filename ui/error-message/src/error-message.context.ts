import { createContext }     from 'react'

import { ErrorMessageProps } from './error-message.interfaces.js'

export const ErrorMessageContext = createContext<ErrorMessageProps>({})
export const ErrorMessageDispatchContext = createContext<any>(null)
