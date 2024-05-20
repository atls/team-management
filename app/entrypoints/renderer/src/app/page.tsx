'use client'

import React             from 'react'

import { Avatar }        from '@ui/avatar'
import { Button }        from '@ui/button'
import { Card }          from '@ui/card'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Sidebar }       from '@ui/sidebar'
import { Text }          from '@ui/text'
import { ThemeProvider } from '@ui/theme'
import { theme }         from '@ui/theme'

const Page = () => (
  <ThemeProvider>
    <Layout>
      <Box backgroundColor={theme.backgrounds.main}>
        <Sidebar></Sidebar>
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
          style={{ boxShadow: theme.shadows.button }}
        >
          Icon
        </Button>
        <Button
          shape='rectangle'
          size='smallRoundedPadding'
          variant='lightBlueBackgroundButton'
          style={{
            boxShadow: theme.shadows.button,
            fontWeight: theme.fontWeights.normal,
            fontSize: theme.fontSizes.normal.semiDefault,
          }}
        >
          Пригласить
        </Button>
        <Box display='flex' flexDirection='row'>
          <Text fontSize={theme.fontSizes.medium.semiIncreased}>Team members</Text>
          <Button
            size='middlingRoundedPadding'
            variant='whiteBackgroundButton'
            style={{ boxShadow: theme.shadows.button }}
            shape='circle'
          >
            +
          </Button>
        </Box>

        <Avatar
          notification={true}
          size={50}
          image
          borderWidth={0}
          src='/profile.png'
          alt='avatar'
        />
        <Card theme={theme}>
          <Box>Children/progressbar</Box>
          <Box>Children/switch</Box>
        </Card>
      </Box>
    </Layout>
  </ThemeProvider>
)

export default Page
