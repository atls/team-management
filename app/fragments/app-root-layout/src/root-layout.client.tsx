'use client'

import React                         from 'react'
import { IntlProvider }              from 'react-intl'

import { ThemeProvider }             from '@ui/theme'
import { ToastNotificationProvider } from '@ui/toast-notification'

export const RootLayoutClient = ({ children, messages }) => (
  <html>
    <body>
      <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
        <ThemeProvider>
          <ToastNotificationProvider>{children}</ToastNotificationProvider>
        </ThemeProvider>
      </IntlProvider>
    </body>
  </html>
)
