'use client'

import { messages }      from '@globals/locales'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

export const RootLayoutClient = ({ children }) => {
  return (
    <html>
      <body>
        <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
          <ThemeProvider>{children}</ThemeProvider>
        </IntlProvider>
      </body>
    </html>
  )
}
