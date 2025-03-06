import type { ThemeType }     from '@ui/theme'
import type { JSX }           from 'react'

import { useState }           from 'react'
import React                  from 'react'

import { NotificationsModal } from '@app/notifications-modal'
import { Button }             from '@ui/button'
import { NotificationsIcon }  from '@ui/icons'
import { Row }                from '@ui/layout'
import { ThemeSwitch }        from '@ui/switch'
import { useTheme }           from '@emotion/react'

const ThemeSelector: React.FC = (): JSX.Element => {
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState<boolean>(false)
  const theme = useTheme() as ThemeType
  const handleNotificationsModal = (): void => {
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
        avatar='/profile.png'
        onBackdropClick={handleNotificationsModal}
      />
    </Row>
  )
}

export { ThemeSelector }
