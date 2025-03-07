'use client'

import type { JSX }                  from 'react'

import type { RootLayoutProps }      from './root-layout.interfaces.js'

import { IntlProvider }              from 'react-intl'
import React                         from 'react'

import { ToastNotificationProvider } from '@stores/toast-notification'
import { ThemeProvider }             from '@ui/theme'

export const RootLayoutClient = ({ children, messages }: RootLayoutProps): JSX.Element => (
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
