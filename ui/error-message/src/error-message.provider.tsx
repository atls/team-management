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
    <ErrorMessageContext.Provider value={errorMessage}>
      <ErrorMessageDispatchContext.Provider value={errorMessageDispatch}>
        <ErrorMessage errorMessage={errorMessage} errorMessageDispatch={errorMessageDispatch} />
        {children}
      </ErrorMessageDispatchContext.Provider>
    </ErrorMessageContext.Provider>
  )
}
