import { useTheme }           from '@emotion/react'

import React                  from 'react'
import { useState }           from 'react'

import { NotificationsModal } from '@app/notifications-modal'
import { Button }             from '@ui/button'
import { NotificationsIcon }  from '@ui/icons'
import { Row }                from '@ui/layout'
import { Box }                from '@ui/layout'
import { ThemeSwitch }        from '@ui/switch'
import { ThemeType }          from '@ui/theme'

const ThemeSelector: React.FC = () => {
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState<boolean>(false)
  const theme = useTheme() as ThemeType
  const handleNotificationsModal = () => {
    setIsNotificationsModalOpen(!isNotificationsModalOpen)
  }
  const onThemeChange = () => {
    onThemeChange()
  }

  return (
    <Row
      maxWidth={theme.spaces.semiSuper}
      justifyContent='space-between'
      margin={'24px 24px 0 0'}
      alignSelf='flex-end'
    >
      <Button
        boxShadow={theme.shadows.black}
        shape='circle'
        size='middlingRoundedPadding'
        variant='whiteBackgroundButton'
        onClick={handleNotificationsModal}
        style={{ position: 'relative' }}
      >
        <NotificationsIcon width={theme.spaces.semiRegular} height={theme.spaces.semiRegular} />
      </Button>
      <ThemeSwitch onChange={onThemeChange} />
      <Box
        position={'absolute'}
        top={0}
        right={0}
        style={{ position: 'absolute', top: '0', right: '0' }}
      >
        <NotificationsModal open={isNotificationsModalOpen} />
      </Box>
    </Row>
  )
}

export { ThemeSelector }
