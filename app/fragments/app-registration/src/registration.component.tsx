'use client'

import { useTheme }   from '@emotion/react'

import React          from 'react'
import { useIntl }    from 'react-intl'

import { MainLogo }   from '@app/main-logo'
import { Background } from '@ui/background'
import { Button }     from '@ui/button'
import { GitHubIcon } from '@ui/icons'
import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'
import { ThemeType }  from '@ui/theme'

const Registration: React.FC = () => {
  const theme = useTheme() as ThemeType
  const { formatMessage } = useIntl()
  return (
    <Background backgroundUrl='url(/Bg.png)'>
      <Column margin={theme.spaces.tb180lra} height='auto'>
        <MainLogo />
        <Box justifyContent='center'>
          <Button variant='blackBackgroundButton' shape='rectangle' size='bigRoundedPadding'>
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

export { Registration }
