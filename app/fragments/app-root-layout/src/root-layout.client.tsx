'use client'

import { IntlProvider }              from 'react-intl'
import React                         from 'react'

import { ToastNotificationProvider } from '@stores/toast-notification'
import { ThemeProvider }             from '@ui/theme'

import { RootLayoutProps }           from './root-layout.interfaces.js'

export const RootLayoutClient = ({ children, messages }: RootLayoutProps) => (
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
