import styled                              from '@emotion/styled'
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
import { checkUrlErrorHook }               from './hooks/check-url-error.hook.js'
import { baseAbsoluteConteinerStyles }     from './toast-notification.styles.js'
import { shapeAbsoluteContainerStyles }    from './toast-notification.styles.js'
import { notificationContainerStyles }     from './toast-notification.styles.js'

const AbsoluteContainer = styled<any>(Box)(
  baseAbsoluteConteinerStyles,
  shapeAbsoluteContainerStyles
)

const NotificationContainer = styled<any>(Box)(notificationContainerStyles)

export const ToastNotification: FC<ToastNotificationComponentProps> = ({
  notificationData,
  toastNotificationDispatch,
}) => {
  const theme = useTheme() as ThemeType
  const [isHide, setHide] = useState<boolean>(false)

  const { type, text, code } = notificationData

  useEffect(() => {
    if (typeof window !== 'undefined') {
      toastNotificationDispatch({
        type: 'notify',
        toastNotification: checkUrlErrorHook(),
      })
    }
  }, [toastNotificationDispatch])

  useEffect(() => {
    setHide(false)
  }, [text])

  useEffect(() => {
    if (!isHide) {
      setTimeout(() => {
        setHide(true)
        toastNotificationDispatch({
          type: 'clean',
        })
      }, HIDE_DELAY_5SEC)
    }
  }, [isHide, toastNotificationDispatch])

  return (
    <Condition match={Boolean(text && !isHide)}>
      <AbsoluteContainer>
        <NotificationContainer type={type}>
          <Text color={theme.colors.white}>
            {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
            {code ? ` : ${code}` : ''}
          </Text>
        </NotificationContainer>
      </AbsoluteContainer>
    </Condition>
  )
}
