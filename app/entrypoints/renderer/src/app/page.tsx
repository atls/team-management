'use client'

import React             from 'react'

import { Input }         from '@ui/input'
import { Switch }        from '@ui/switch'
import { ThemeProvider } from '@ui/theme'

const Page = () => (
  <ThemeProvider>
    <Input placeholder='placeholder' />
    <Switch />
  </ThemeProvider>
)

export default Page
