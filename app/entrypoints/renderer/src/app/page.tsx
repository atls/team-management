'use client'

import React             from 'react'

import { TestIcon }      from '@ui/icons-test'
import { Input }         from '@ui/input'
import { BaseSwitch }    from '@ui/switch'
import { IconSwitch }    from '@ui/switch'
import { ThemeSwitch }   from '@ui/switch'
import { ThemeProvider } from '@ui/theme'

const Page = () => (
  // TODO экспорт белых иконок с прозрачным фоном
  <ThemeProvider>
    <Input placeholder='placeholder' />
    <BaseSwitch />
    <IconSwitch>
      <TestIcon width={16} height={16} color='white' />
    </IconSwitch>
    <ThemeSwitch />
  </ThemeProvider>
)

export default Page
