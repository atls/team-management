'use client'

import React             from 'react'

import { Input }         from '@ui/input'
import { ThemeProvider } from '@ui/theme'

const Page = () => (
  <ThemeProvider>
    <Input placeholder='placeholder' />
  </ThemeProvider>
)

export default Page
