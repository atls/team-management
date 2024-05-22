'use client'

import React             from 'react'

import { ThemeProvider } from '@ui/theme'

const RootLayout = ({ children }) => (
  <html>
    <body>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
)

export default RootLayout
