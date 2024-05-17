'use client'

import React             from 'react'

import { Layout }         from '@ui/layout'
import { ThemeProvider } from '@ui/theme'

const Page = () => (
  <ThemeProvider>
    <Layout></Layout>
  </ThemeProvider>
)

export default Page
