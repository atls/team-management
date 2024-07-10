import { useTheme }                    from '@emotion/react'

import React                           from 'react'
import { FC }                          from 'react'
import { useState }                    from 'react'
import { useReducer }                  from 'react'
import { useEffect }                   from 'react'

import { Condition }                   from '@ui/condition'
import { Box }                         from '@ui/layout'
import { Text }                        from '@ui/text'
import { ThemeType }                   from '@ui/theme'

import { HIDE_DELAY_15SEC }            from './error-message.constants.js'
import { ErrorMessageContext }         from './error-message.context.js'
import { ErrorMessageDispatchContext } from './error-message.context.js'
import { ErrorMessageProps }           from './error-message.interfaces.js'
import { checkErrorHook }              from './check-error.hook.js'
import { errorMessageReducer }         from './error-message.reducer.js'

export const ErrorMessageProvider: FC<ErrorMessageProps> = ({ children }) => {
  const [isHide, setHide] = useState(false)

  const [errorMessage, errorMessageDispatch] = useReducer(errorMessageReducer, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      errorMessageDispatch({
        type: 'set',
        // errorMessage: { text: 'test-error-text', code: 777 },
        //     eslint-disable-next-line react-hooks/exhaustive-deps
        errorMessage: checkErrorHook(),
      })
    }
  }, [])

  setTimeout(() => {
    setHide(true)
  }, HIDE_DELAY_15SEC)

  const theme = useTheme() as ThemeType

  return (
    <ErrorMessageContext.Provider value={errorMessage}>
      <ErrorMessageDispatchContext.Provider value={errorMessageDispatch}>
        <Condition match={Boolean(errorMessage.text && !isHide)}>
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
                {errorMessage.text}
                {errorMessage.code && ` : ${errorMessage.code}`}
              </Text>
            </Box>
          </Box>
        </Condition>
        {children}
      </ErrorMessageDispatchContext.Provider>
    </ErrorMessageContext.Provider>
  )
}
