'use client'

import React             from 'react'

import { Avatar }        from '@ui/avatar'
import { Button }        from '@ui/button'
import { Card }          from '@ui/card'
import { Box }           from '@ui/layout'
import { Sidebar }       from '@ui/sidebar'
import { Text }          from '@ui/text'
import { ThemeProvider } from '@ui/theme'

const Page = () => (
  <ThemeProvider>
    <Box backgroundColor='#F8F8F8'>
      <Sidebar>
        <span>Dashboard</span>
        <span>Organizations</span>
      </Sidebar>
      <Button
        valueHeight='96.91px'
        size='bigRoundedPadding'
        variant='blackBackgroundButton'
        style={{ fontWeight: '500', fontSize: '20px', width: '347px' }}
      >
        Войти с помощью GitHub
      </Button>

      <Button
        shape='circle'
        size='middlingRoundedPadding'
        variant='blueBackgroundButton'
        style={{ boxShadow: '0px 4px 9px 0px rgba(0, 0, 0, 0.2)  ' }}
      >
        Icon
      </Button>
      <Button
        shape='rectangle'
        size='smallRoundedPadding'
        variant='lightBlueBackgroundButton'
        style={{
          boxShadow: '0px 4px 9px 0px rgba(0, 0, 0, 0.2)  ',
          fontWeight: '400',
          fontSize: '16px',
        }}
      >
        Пригласить
      </Button>
      <Box display='flex' flexDirection='row'>
        <Text fontSize='34px'>Team members</Text>
        <Button
          size='middlingRoundedPadding'
          variant='whiteBackgroundButton'
          style={{ boxShadow: '0px 4px 9px 0px rgba(0, 0, 0, 0.2)  ' }}
          shape='circle'
        >
          +
        </Button>
      </Box>

      <Avatar
        notification={true}
        size={100}
        contentType='image'
        shape='circle'
        borderWidth={0}
        src='/profile.png'
        alt='avatar'
      />
      <Card>
        <p>Children/progressbar</p>
        <p>Children/switch</p>
      </Card>
    </Box>
  </ThemeProvider>
)

export default Page
