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
import { checkUrlErrorHook }               from './check-url-error.hook.js'
import { baseAbsoluteConteinerStyles }     from './toast-notification.styles.js'
import { shapeAbsoluteContainerStyles }    from './toast-notification.styles.js'
import { notificationContainerStyles }     from './toast-notification.styles.js'

const AbsoluteContainer = styled<any>(Box)(
  baseAbsoluteConteinerStyles,
  shapeAbsoluteContainerStyles
)

const NotificationContainer = styled<any>(Box)(notificationContainerStyles)

export const ToastNotification: FC<ToastNotificationComponentProps> = ({
  type,
  text,
  code,
  toastNotificationDispatch,
}) => {
  const theme = useTheme() as ThemeType
  const [isHide, setHide] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      toastNotificationDispatch({
        type: 'notify',
        toastNotification: checkUrlErrorHook(),
      })
    }
  }, [toastNotificationDispatch])

  useEffect(() => {
    console.log(type)
    setHide(false)
  }, [text])

  useEffect(() => {
    if (!isHide) {
      setTimeout(() => {
        // TODO удалить текст объекта для того,
        // чтобы можно было закидывать следующий тост
        setHide(true)
      }, HIDE_DELAY_5SEC)
    }
  }, [isHide])

  return (
    <Condition match={Boolean(text && !isHide)}>
      <AbsoluteContainer>
        <NotificationContainer type={type}>
          <Text color={theme.colors.white}>
            <div dangerouslySetInnerHTML={{ __html: text }} />
            {code ? ` : ${code}` : ''}
          </Text>
        </NotificationContainer>
      </AbsoluteContainer>
    </Condition>
  )
}
