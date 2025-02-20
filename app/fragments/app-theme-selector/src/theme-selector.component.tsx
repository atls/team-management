import { useState }           from 'react'
import React                  from 'react'

import { NotificationsModal } from '@app/notifications-modal'
import { Button }             from '@ui/button'
import { NotificationsIcon }  from '@ui/icons'
import { Row }                from '@ui/layout'
import { ThemeSwitch }        from '@ui/switch'
import { ThemeType }          from '@ui/theme'
import { useTheme }           from '@emotion/react'

const ThemeSelector: React.FC = () => {
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState<boolean>(false)
  const theme = useTheme() as ThemeType
  const handleNotificationsModal = () => {
    setIsNotificationsModalOpen(!isNotificationsModalOpen)
  }

  return (
    <Row
      maxWidth={theme.spaces.semiSuper}
      justifyContent='space-between'
      margin={theme.spaces.t24r24b0l0}
      alignSelf='flex-end'
    >
      <Button
        boxShadow={theme.shadows.black}
        shape='circle'
        size='middlingRoundedPadding'
        variant='whiteBackgroundButton'
        onClick={handleNotificationsModal}
      >
        <NotificationsIcon
          color={theme.colors.text.primary}
          width={theme.spaces.semiRegular}
          height={theme.spaces.semiRegular}
        />
      </Button>
      <ThemeSwitch />

      <NotificationsModal
        open={isNotificationsModalOpen}
        onBackdropClick={handleNotificationsModal}
        avatar='/profile.png'
      />
    </Row>
  )
}

export { ThemeSelector }
