'use client'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

import messages          from '../../locales/ru.json'

const RootLayout = ({ children }) => {
  if (!process.env.NEXT_PUBLIC_GH_CLIENT_ID) throw new Error('need github cliend id')

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
export default RootLayout
