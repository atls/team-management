'use client'

import React             from 'react'

import { ThemeProvider } from '@ui/theme'
import {Input}  from '@ui/input'

const Page = () => (
  <ThemeProvider>
	<Input placeholder='placeholder'/>
  </ThemeProvider>
)

export default Page
