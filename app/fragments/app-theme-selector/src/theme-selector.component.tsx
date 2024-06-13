import styled                          from '@emotion/styled'
import { useTheme }                    from '@emotion/react'

import React                           from 'react'

import { Button }                      from '@ui/button'
import { NotificationsIcon }           from '@ui/icons'
import { Row }                         from '@ui/layout'
import { ThemeSwitch }                 from '@ui/switch'
import { ThemeType }                   from '@ui/theme'

import { baseThemeSelectorRowStyles }  from './theme-selector.styles.ts'
import { shapeThemeSelectorRowStyles } from './theme-selector.styles.ts'

const ThemeSelectorRow = styled(Row)(baseThemeSelectorRowStyles, shapeThemeSelectorRowStyles)

const ThemeSelector: React.FC = () => {
  const theme = useTheme() as ThemeType

  return (
    <ThemeSelectorRow>
      <Button
        boxShadow={theme.shadows.black}
        shape='circle'
        size='middlingRoundedPadding'
        variant='whiteBackgroundButton'
      >
        <NotificationsIcon
          width={theme.spaces.semiRegular}
          height={theme.spaces.semiRegular}
          color={theme.colors.button.whiteBackgroundButton.default.color}
        />
      </Button>
      <ThemeSwitch />
    </ThemeSelectorRow>
  )
}

export { ThemeSelector }
