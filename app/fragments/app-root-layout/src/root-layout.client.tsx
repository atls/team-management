'use client'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'
import { messages }      from '@globals/locales'

export const RootLayoutClient = ({ children }) => (
  <html>
    <body>
      <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
        <ThemeProvider>{children}</ThemeProvider>
      </IntlProvider>
    </body>
  </html>
)
