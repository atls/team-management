'use client'

import React             from 'react'

import { ThemeProvider } from '@ui/theme'

const RootLayout = ({ children }) => (
  <ThemeProvider>
    <html>
      <body>{children}</body>
    </html>
  </ThemeProvider>
)

export default RootLayout
