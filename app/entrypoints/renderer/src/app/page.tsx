'use client'

import React            from 'react'

import { Input }         from '@ui/input'
import { ThemeProvider } from '@ui/theme'

const Page = () => {
  return (
    <ThemeProvider>
      <Input placeholder='input-placeholder' />
    </ThemeProvider>
  )
}

export default Page
