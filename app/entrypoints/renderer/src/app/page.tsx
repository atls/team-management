'use client'

import React            from 'react'

import { Divider }       from '@ui/divider'
import { Box }           from '@ui/layout'
import { Line }          from '@ui/progress'
import { Scroll }        from '@ui/scroll'
import { ThemeProvider } from '@ui/theme'

const Page = () => (
  <ThemeProvider>
    <Line percent={25} />
    <Scroll height={20}>
      <Box flexDirection='column'>
        <Divider width={10} color='gray' />
        <p>Banana</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Grapefruit</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Peach</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Grapefruit</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Peach</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Grapefruit</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Peach</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Grapefruit</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Peach</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Grapefruit</p>
        <Divider width={10} height={10} backgroundColor='gray' />
        <p>Peach</p>
      </Box>
    </Scroll>
  </ThemeProvider>
)

export default Page
