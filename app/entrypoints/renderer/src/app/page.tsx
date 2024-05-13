'use client'

import React             from 'react'

import { ThemeProvider } from '@ui/theme'
import { Input }         from '@ui/input'
import { BaseSwitch }        from '@ui/switch'
import { IconSwitch }        from '@ui/switch'
import { ModeSwitch }        from '@ui/switch'

const Page = () => (
  <ThemeProvider>
    <Input placeholder='placeholder' />
    <BaseSwitch />
    <IconSwitch />
  </ThemeProvider>
)

export default Page
