'use client'

import React                from 'react'

import { Avatar }           from '@ui/avatar'
import { Button }           from '@ui/button'
import { Card }             from '@ui/card'
import { SidebarComponent } from '@ui/sidebar'
import { ThemeProvider }    from '@ui/theme'

const Page = () => (
  <ThemeProvider>
    <>
      <h1>Team management</h1>
      <SidebarComponent />
      <Button />
      <Avatar size={150} shape={'circle'} text={'Avatar'} />
      <Card>
        <p>Children/progressbar</p>
        <p>Children/switch</p>
      </Card>
    </>
  </ThemeProvider>
)

export default Page
