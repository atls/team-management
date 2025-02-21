import type { ThemeType }                       from '@ui/theme'
import type { FC }                              from 'react'

import type { ToastNotificationComponentProps } from './toast-notification.interfaces.js'

import styled                                   from '@emotion/styled'
import { useState }                             from 'react'
import React                                    from 'react'

import { Condition }                            from '@ui/condition'
import { Box }                                  from '@ui/layout'
import { Text }                                 from '@ui/text'
import { useTheme }                             from '@emotion/react'

import { ToastNotificationHook }                from './toast-notification.hook.js'
import { baseAbsoluteConteinerStyles }          from './toast-notification.styles.js'
import { shapeAbsoluteContainerStyles }         from './toast-notification.styles.js'
import { notificationContainerStyles }          from './toast-notification.styles.js'

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

  ToastNotificationHook({ toastNotificationDispatch, isHide, setHide, text })

  return (
    <Condition match={Boolean(text && !isHide)}>
      <AbsoluteContainer>
        <NotificationContainer type={type}>
          <Text color={theme.colors.white}>
            {!!text && <div dangerouslySetInnerHTML={{ __html: text }} />}
            {code ? ` : ${code}` : ''}
          </Text>
        </NotificationContainer>
      </AbsoluteContainer>
    </Condition>
  )
}
