import { useTheme }                    from '@emotion/react'

import React                           from 'react'
import { PropsWithChildren }           from 'react'
import { FC }                          from 'react'
import { PropsWithChildren }           from 'react'
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
import { checkUrlErrorHook }           from './check-url-error.hook.js'
import { errorMessageReducer }         from './error-message.reducer.js'

export const ErrorMessageProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme() as ThemeType

  const [isHide, setHide] = useState(false)
  const [errorMessage, errorMessageDispatch] = useReducer(errorMessageReducer, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      errorMessageDispatch({
        type: 'set',
        //     eslint-disable-next-line react-hooks/exhaustive-deps
        errorMessage: checkUrlErrorHook(),
      })
    }
  }, [])

  useEffect(() => {
    setHide(false)
  }, [errorMessage])

  useEffect(() => {
    if (!isHide) {
      setTimeout(() => {
        setHide(true)
      }, HIDE_DELAY_15SEC)
    }
  }, [isHide])

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
                {errorMessage.code ? ` : ${errorMessage.code}` : ''}
              </Text>
            </Box>
          </Box>
        </Condition>
        {children}
      </ErrorMessageDispatchContext.Provider>
    </ErrorMessageContext.Provider>
  )
}
