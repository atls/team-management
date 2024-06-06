import { useTheme }      from '@emotion/react'

import React             from 'react'
import { useIntl }       from 'react-intl'

import { AtlantisIcon }  from '@ui/icons'
import { Column }        from '@ui/layout'
import { Text }          from '@ui/text'

import { MainLogoTheme } from './main-logo.interface.js'

const MainLogo: React.FC = () => {
  const { formatMessage } = useIntl()
  const theme: MainLogoTheme = useTheme()
  return (
    <Column maxWidth={theme.spaces?.extraLarge} alignItems='center'>
      <AtlantisIcon width={theme.spaces?.extraLarge} height={theme.spaces?.gigantIncreased} />
      <Text
        fontSize='large.reduced'
        color={theme.colors?.GRAY_1600}
        marginTop={theme.spaces?.miderateIncreased}
      >
        {formatMessage({ id: 'logo-title' })}
      </Text>
    </Column>
  )
}

export { MainLogo }
