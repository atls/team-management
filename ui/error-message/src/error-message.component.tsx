import { useTheme }                    from '@emotion/react'

import React                           from 'react'
import { FC }                          from 'react'
import { useState }                    from 'react'
import { useReducer }                  from 'react'

import { Condition }                   from '@ui/condition'
import { Box }                         from '@ui/layout'
import { Text }                        from '@ui/text'
import { ThemeType }                   from '@ui/theme'

import { HIDE_DELAY_15SEC }            from './error-message.constants.js'
import { ErrorMessageContext }         from './error-message.context.js'
import { ErrorMessageDispatchContext } from './error-message.context.js'
import { ErrorMessageProps }           from './error-message.interfaces.js'
import { errorMessageReducer }         from './error-message.reducer.js'

export const ErrorMessage: FC<ErrorMessageProps> = ({ errorText, errorCode }) => {
  const [isHide, setHide] = useState(false)

  // TODO delete file
  const [errorMessage, errorMessageDispatch] = useReducer(errorMessageReducer, [])

  setTimeout(() => {
    setHide(true)
  }, HIDE_DELAY_15SEC)

  const theme = useTheme() as ThemeType

  return (
    <Condition match={Boolean(errorText && !isHide)}>
      <ErrorMessageContext.Provider value={errorMessage}>
        <ErrorMessageDispatchContext.Provider value={errorMessageDispatch}>
          <Box
            position='fixed'
            zIndex={theme.spaces.s1500}
            bottom={theme.spaces.moderate}
            width='100%'
            justifyContent='center'
          >
            <Box
              width='fit-content'
              backgroundColor={theme.colors.RED_600}
              padding={theme.spaces.v8h16}
              borderRadius={theme.radii.f20}
            >
              <Text color={theme.colors.white}>
                {errorText}
                {errorCode && ` : ${errorCode}`}
              </Text>
            </Box>
          </Box>
        </ErrorMessageDispatchContext.Provider>
      </ErrorMessageContext.Provider>
    </Condition>
  )
}
