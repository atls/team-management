'use client'

import React             from 'react'

import { ThemeProvider } from '@ui/theme'
import { Input }         from '@ui/input'
import { BaseSwitch }        from '@ui/switch'
import { IconSwitch }        from '@ui/switch'
import { ThemeSwitch }        from '@ui/switch'
import { TelegramIcon }      from '@ui/icons-test'

const Page = () => (
  <ThemeProvider>
    <Input placeholder='placeholder' />
    <BaseSwitch />
    <IconSwitch>
			<TelegramIcon width={16} height={16} />
		</IconSwitch>
  </ThemeProvider>
)

export default Page
