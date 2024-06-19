import styled                          from '@emotion/styled'
import { useTheme }                    from '@emotion/react'

import React                           from 'react'
import { useState }                    from 'react'

import { NotificationsModal }          from '@app/notifications-modal'
import { Button }                      from '@ui/button'
import { NotificationsIcon }           from '@ui/icons'
import { Row }                         from '@ui/layout'
import { ThemeSwitch }                 from '@ui/switch'
import { ThemeType }                   from '@ui/theme'

import { baseThemeSelectorRowStyles }  from './theme-selector.styles.js'
import { shapeThemeSelectorRowStyles } from './theme-selector.styles.js'

const ThemeSelectorRow = styled(Row)(baseThemeSelectorRowStyles, shapeThemeSelectorRowStyles)

const ThemeSelector: React.FC = () => {
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState<boolean>(false)
  const theme = useTheme() as ThemeType
  const handleNotificationsModal = () => {
    setIsNotificationsModalOpen(!isNotificationsModalOpen)
  }

  return (
    // <ThemeSelectorRow>
    <Row>
      <Button
        boxShadow={theme.shadows.black}
        shape='circle'
        size='middlingRoundedPadding'
        variant='whiteBackgroundButton'
        onClick={handleNotificationsModal}
      >
        <NotificationsIcon width={theme.spaces.semiRegular} height={theme.spaces.semiRegular} />
      </Button>
      <ThemeSwitch />

      <NotificationsModal
        open={isNotificationsModalOpen}
        onBackdropClick={handleNotificationsModal}
        avatar='/profile.png'
      />
      {/*</ThemeSelectorRow>*/}
    </Row>
  )
}

export { ThemeSelector }
