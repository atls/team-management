import type { ThemeType }   from '@ui/theme'

import { FormattedMessage } from 'react-intl'
import React                from 'react'

import { AtlantisIcon }     from '@ui/icons'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { useTheme }         from '@emotion/react'

const MainLogo: React.FC = () => {
  const theme = useTheme() as ThemeType

  return (
    <Column maxWidth={theme.spaces.extraLarge} alignItems='center'>
      <AtlantisIcon width={theme.spaces.extraLarge} height={theme.spaces.gigantIncreased} />
      <Text
        fontSize='large.reduced'
        color={theme.colors.GRAY_1600}
        marginTop={theme.spaces.miderateIncreased}
      >
        <FormattedMessage id='logo-title' />
      </Text>
    </Column>
  )
}

export { MainLogo }
