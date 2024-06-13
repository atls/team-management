'use client'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { BaseLayout }    from '@fragments/base-layout'
import { ThemeProvider } from '@ui/theme'

import messages          from '../../locales/ru.json'

const RootLayout = ({ children }) => (
  <html>
    <body>
      <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
        <ThemeProvider>
          <BaseLayout>{children}</BaseLayout>
        </ThemeProvider>
      </IntlProvider>
    </body>
  </html>
)

export default RootLayout
