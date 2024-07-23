'use client'

import React                         from 'react'
import { IntlProvider }              from 'react-intl'

import { ToastNotificationProvider } from '@store/toast-notification'
import { ThemeProvider }             from '@ui/theme'

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
