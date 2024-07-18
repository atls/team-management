import { useTheme }                        from '@emotion/react'

import React                               from 'react'
import { FC }                              from 'react'
import { useEffect }                       from 'react'
import { useState }                        from 'react'

import { Condition }                       from '@ui/condition'
import { Box }                             from '@ui/layout'
import { Text }                            from '@ui/text'
import { ThemeType }                       from '@ui/theme'

import { HIDE_DELAY_5SEC }                 from './toast-notification.constants.js'
import { ToastNotificationComponentProps } from './toast-notification.interfaces.js'
import { checkUrlErrorHook }               from './check-url-error.hook.js'

export const ToastNotification: FC<ToastNotificationComponentProps> = ({
  toastNotification,
  toastNotificationDispatch,
}) => {
  const theme = useTheme() as ThemeType
  const [isHide, setHide] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      toastNotificationDispatch({
        type: 'set',
        toastNotification: checkUrlErrorHook(),
      })
    }
  }, [toastNotificationDispatch])

  useEffect(() => {
    setHide(false)
  }, [toastNotification])

  useEffect(() => {
    if (!isHide) {
      setTimeout(() => {
        setHide(true)
      }, HIDE_DELAY_5SEC)
    }
  }, [isHide])

  return (
    <Condition match={Boolean(toastNotification.text && !isHide)}>
      <Box
        position='fixed'
        zIndex={theme.spaces.s1500}
        bottom={theme.spaces.moderate}
        width='100%'
        justifyContent='center'
      >
        <Box
          width='fit-content'
          backgroundColor={theme.colors.RED_600}
          padding={theme.spaces.v8h16}
          borderRadius={theme.radii.f20}
        >
          <Text color={theme.colors.white}>
            {toastNotification.text}
            {toastNotification.code ? ` : ${toastNotification.code}` : ''}
          </Text>
        </Box>
      </Box>
    </Condition>
  )
}
