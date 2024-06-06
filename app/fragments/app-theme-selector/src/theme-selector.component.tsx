import { useTheme }           from '@emotion/react'

import React                  from 'react'

import { Button }             from '@ui/button'
import { NotificationsIcon }  from '@ui/icons'
import { Row }                from '@ui/layout'
import { ThemeSwitch }        from '@ui/switch'

import { ThemeSelectorTheme } from './theme-selector.interface.js'

const ThemeSelector: React.FC = () => {
  const theme: ThemeSelectorTheme = useTheme()
  return (
    <Row maxWidth={theme.space?.largeSuper} justifyContent='space-between'>
      <Button
        boxShadow={theme.shadows?.black}
        shape='circle'
        size='middlingRoundedPadding'
        variant='whiteBackgroundButton'
      >
        <NotificationsIcon
          width={theme.space?.normalSemiDefault}
          height={theme.space?.normalSemiDefault}
        />
      </Button>
      <ThemeSwitch />
    </Row>
  )
}

export { ThemeSelector }
