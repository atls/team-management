'use client'

import React             from 'react'

import { Checkbox }      from '@ui/checkbox'
import { Divider }       from '@ui/divider'
import { Box }           from '@ui/layout'

import { Scroll }        from '@ui/scroll'
import { ThemeProvider } from '@ui/theme'

const doNothing = () => {
  // do nothing
}

const Page = () => (
  <ThemeProvider>

    <Scroll height={20}>
      <Box flexDirection='column'>
        <Box flexDirection='row'>
          <Checkbox checked>Option</Checkbox>
        </Box>
        <Divider width={10} color='gray' />
        <Box flexDirection='row'>
          <p>Banana</p>
        </Box>
        <Divider width={10} color='gray' />
        <Box flexDirection='row'>
          <p>Banana</p>
        </Box>
        <Divider width={10} color='gray' />
        <Box flexDirection='row'>
          <p>Banana</p>
        </Box>
        <Divider width={10} color='gray' />
        <Box flexDirection='row'>
          <p>Banana</p>
        </Box>
        <Divider width={10} color='gray' />
      </Box>
    </Scroll>
  </ThemeProvider>
)

export default Page
