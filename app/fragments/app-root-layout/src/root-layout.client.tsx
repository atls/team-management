'use client'

import React                    from 'react'
import { IntlProvider }         from 'react-intl'

import { ErrorMessageProvider } from '@ui/error-message'
import { ThemeProvider }        from '@ui/theme'

export const RootLayoutClient = ({ children, messages }) => (
  <html>
    <body>
      <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
        <ThemeProvider>
          <ErrorMessageProvider>{children}</ErrorMessageProvider>
        </ThemeProvider>
      </IntlProvider>
    </body>
  </html>
)
