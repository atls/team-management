'use client'

import React                from 'react'

import { Avatar }           from '@ui/avatar'
import { Button }           from '@ui/button'
import { Card }             from '@ui/card'
import { SidebarComponent } from '@ui/sidebar'
import { ThemeProvider }    from '@ui/theme'

import avatarImage          from '../../../../assets/profile.png'

const Page = () => (
  <ThemeProvider>
    <>
      <h1>Team management</h1>
      <SidebarComponent />
      <Button
        size={'middlingRoundedPaddingtStyles'}
        variant={'blackBackgroundButton'}
        valueWidth={'3547px'}
      >
        Войти с Github
      </Button>
      <Button size={'middlingRoundedPaddingtStyles'} variant={'whiteBackgroundButton'}>
        +
      </Button>
      <Avatar
        size={100}
        contentType={'image'}
        shape={'circle'}
        borderWidth={0}
        src={
          'https://www.figma.com/file/2vNHefkDcMKAFSnw69RbMM/image/efb6f62056dfdd8faea9ed52a81fbdcd844baa28'
        }
        alt={'avatar'}
      />
      <Card>
        <p>Children/progressbar</p>
        <p>Children/switch</p>
      </Card>
    </>
  </ThemeProvider>
)

export default Page
