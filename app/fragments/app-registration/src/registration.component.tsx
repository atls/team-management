'use client'

import type { ThemeType }         from '@ui/theme'

import { FormattedMessage }       from 'react-intl'
// @ts-expect-error:next-line
import { useRouter }              from 'next/navigation'
import React                      from 'react'

import { MainLogo }               from '@app/main-logo'
import { Background }             from '@ui/background'
import { Button }                 from '@ui/button'
import { GitHubIcon }             from '@ui/icons'
import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Text }                   from '@ui/text'
import { useTheme }               from '@emotion/react'

import { githubAuthRedirectHook } from './github-auth.hook.js'

const RegistrationClient: React.FC = () => {
  const theme = useTheme() as ThemeType
  const router = useRouter()

  return (
    <Background backgroundUrl='url(/Bg.png)'>
      <Column margin={theme.spaces.tb180lra} height='100%' justifyContent='space-between'>
        <MainLogo />
        <Box justifyContent='center'>
          <Button
            variant='blackBackgroundButton'
            shape='rectangle'
            size='bigRoundedPadding'
            onClick={() => {
              githubAuthRedirectHook(router)
            }}
          >
            <GitHubIcon width={theme.spaces.bigDecreased} height={theme.spaces.bigDecreased} />
            <Text
              fontSize={theme.fontSizes.normal.semiIncreased}
              fontWeight={theme.fontWeights.medium}
              color={theme.colors.white}
            >
              <FormattedMessage id='registration-page.login-button' />
            </Text>
          </Button>
        </Box>
      </Column>
    </Background>
  )
}

export { RegistrationClient }
