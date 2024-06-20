'use client'

import { useTheme }               from '@emotion/react'

import React                      from 'react'
// @ts-ignore:next-line
import { useRouter }              from 'next/navigation'
import { useIntl }                from 'react-intl'

import { MainLogo }               from '@app/main-logo'
import { Background }             from '@ui/background'
import { Button }                 from '@ui/button'
import { GitHubIcon }             from '@ui/icons'
import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Text }                   from '@ui/text'
import { ThemeType }              from '@ui/theme'

import { githubAuthRedirectHook } from './github-auth.hook.js'

const RegistrationClient: React.FC = () => {
  console.log(window.location.href)
  let currentUrl = new URL(window.location.href)
  const code = currentUrl.searchParams.get('code')
  console.log(code)

  const theme = useTheme() as ThemeType
  const { formatMessage } = useIntl()
  const router = useRouter()

  return (
    <Background backgroundUrl='url(/Bg.png)'>
      <Column margin={theme.spaces.tb180lra} height='auto'>
        <MainLogo />
        <Box justifyContent='center'>
          <Button
            variant='blackBackgroundButton'
            shape='rectangle'
            size='bigRoundedPadding'
            onClick={() => githubAuthRedirectHook(router)}
          >
            <GitHubIcon width={theme.spaces.bigDecreased} height={theme.spaces.bigDecreased} />
            <Text
              fontSize={theme.fontSizes.normal.semiIncreased}
              fontWeight={theme.fontWeights.medium}
              color={theme.colors.white}
            >
              {formatMessage({ id: 'registration-page.login-button' })}
            </Text>
          </Button>
        </Box>
      </Column>
    </Background>
  )
}

export { RegistrationClient }
