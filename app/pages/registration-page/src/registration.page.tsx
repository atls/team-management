import { useTheme }   from '@emotion/react'

import React          from 'react'
import { useIntl }    from 'react-intl'

import { MainLogo }   from '@app/main-logo'
import { Button }     from '@ui/button'
import { GitHubIcon } from '@ui/icons'
import { Box }        from '@ui/layout'
import { Text }       from '@ui/text'
import { ThemeType }  from '@ui/theme'

export const RegistrationPage: React.FC = () => {
  const theme = useTheme() as ThemeType
  const { formatMessage } = useIntl()
  return (
    <Box
      background={'url(/Bg.png)'}
      height={theme.spaces.fullVh}
      width={theme.spaces.fullWidth}
      backgroundSize='cover'
      justifyContent='center'
    >
      <Box flexDirection='column' margin={theme.spaces.tb179lrauto}>
        <MainLogo />
        <Box justifyContent='center'>
          <Button variant='blackBackgroundButton' shape='rectangle' size='bigRoundedPadding'>
            <GitHubIcon width={theme.spaces.bigDecreased} height={theme.spaces.bigDecreased} />
            <Text
              fontSize={theme.fontSizes.normal.semiIncreased}
              fontWeight={theme.fontWeights.medium}
            >
              {formatMessage({ id: 'registration-page.login-button' })}
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default RegistrationPage
