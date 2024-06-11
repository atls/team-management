import { useTheme }          from '@emotion/react'

import React                 from 'react'

import { Button }            from '@ui/button'
import { NotificationsIcon } from '@ui/icons'
import { Row }               from '@ui/layout'
import { ThemeSwitch }       from '@ui/switch'
import { ThemeType }         from '@ui/theme'

const ThemeSelector: React.FC = () => {
  const theme = useTheme() as ThemeType

  const onThemeChange = () => {
    onThemeChange()
  }
  return (
    <Row
      maxWidth={theme.spaces.semiSuper}
      justifyContent='space-between'
      margin={'24px 24px 0 0'}
      alignSelf={'flex-end'}
    >
      <Button
        boxShadow={theme.shadows.black}
        shape='circle'
        size='middlingRoundedPadding'
        variant='whiteBackgroundButton'
      >
        <NotificationsIcon width={theme.spaces.semiRegular} height={theme.spaces.semiRegular} />
      </Button>
      <ThemeSwitch onChange={onThemeChange} />
    </Row>
  )
}

export { ThemeSelector }
