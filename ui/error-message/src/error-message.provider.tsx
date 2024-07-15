'use client'

import React                           from 'react'
import { PropsWithChildren }           from 'react'
import { FC }                          from 'react'
import { useReducer }                  from 'react'

import { ErrorMessage }                from './error-message.component.js'
import { ErrorMessageContext }         from './error-message.context.js'
import { ErrorMessageDispatchContext } from './error-message.context.js'
import { errorMessageReducer }         from './error-message.reducer.js'

export const ErrorMessageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [errorMessage, errorMessageDispatch] = useReducer(errorMessageReducer, {})

  return (
    <ErrorMessageDispatchContext.Provider value={errorMessageDispatch}>
      <ErrorMessageContext.Provider value={errorMessage}>
        <ErrorMessage errorMessage={errorMessage} errorMessageDispatch={errorMessageDispatch} />
        {children}
      </ErrorMessageContext.Provider>
    </ErrorMessageDispatchContext.Provider>
  )
}
