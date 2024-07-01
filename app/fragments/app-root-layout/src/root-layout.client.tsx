'use client'

import React               from 'react'
import { IntlProvider }    from 'react-intl'
import { useLayoutEffect } from 'react'

import { ErrorMessage }    from '@ui/error-message'
import { ThemeProvider }   from '@ui/theme'

import { checkErrorHook }  from './check-error.hook.js'

export const RootLayoutClient = ({ children, messages }) => {
  let errorMessage
  let errorCode

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ;({ errorMessage, errorCode } = checkErrorHook())
    }
  }, [])

  return (
    <html>
      <body>
        <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
          <ThemeProvider>
            <ErrorMessage errorText={errorMessage} errorCode={errorCode} />
            {children}
          </ThemeProvider>
        </IntlProvider>
      </body>
    </html>
  )
}
