'use client'

import React             from 'react'

import { Divider }       from '@ui/divider'
import { Layout }        from '@ui/layout'
import { Box }           from '@ui/layout'
import { Circle }        from '@ui/progress'
import { ThemeProvider } from '@ui/theme'

const Page = () => (
  <ThemeProvider>
    <Circle percent={25} />
    <Layout>
      <Box flexDirection='column'>
        <div>
          <p>Apple</p>
        </div>
        <Divider weight={10} color='gray_200' />
        <p>Banana</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Grapefruit</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Peach</p>
      </Box>
    </Layout>
  </ThemeProvider>
)

export default Page
