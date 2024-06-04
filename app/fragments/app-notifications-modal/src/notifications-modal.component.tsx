import { useTheme }                from '@emotion/react'

import React                       from 'react'
import { FC }                      from 'react'

import { Avatar }                  from '@ui/avatar'
import { Divider }                 from '@ui/divider'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Modal }                   from '@ui/modal'
import { Scroll }                  from '@ui/scroll'
import { Text }                    from '@ui/text'

import { NotificationsModalProps } from './notifications-modal.interfaces'
import { NotificationsModalTheme } from './notifications-modal.interfaces'

const NotificationsModal: FC<NotificationsModalProps> = ({ avatar, name, date }) => {
  const theme: NotificationsModalTheme = useTheme()
  return (
    <Modal open={true} width={415}>
      <Column>
        <Text
          maxWidth={theme.spaces?.superBiggest}
          marginBottom={theme.spaces?.micro}
          fontSize='medium.semiReduced'
          color='#282828'
        >
          Notifications
        </Text>
        <Scroll height='241px'>
          <Box flexDirection='column' alignItems='flex-start' maxWidth={350}>
            <Box marginBottom={theme.spaces?.micro}>
              <Avatar size={50} image notification={true} src={avatar} alt='avatar' />
              <Column margin={theme.spaces?.tiny}>
                <Text fontSize='small.semiLarge'>
                  {name} <Text fontWeight='semiBold'> accepted the invite</Text>
                </Text>
                <Text fontSize='small.default' color='#AEAEAE' marginTop={theme.spaces?.s5}>
                  {date ? date : 'Dec 7, 2025 09:33'}
                </Text>
              </Column>
            </Box>
            <Divider
              weight={theme.spaces?.nano}
              backgroundColor={theme.backgrounds?.gray}
              marginTop={theme.spaces?.minniSemiDefault}
              marginBottom={theme.spaces?.tiny}
            />
          </Box>
        </Scroll>

        <Box justifyContent='center'>
          <Text
            color='#508EE9'
            maxWidth={theme.spaces?.superBiggest}
            marginBottom={theme.spaces?.micro}
            fontSize='normal.semiDefault'
          >
            Mark all as read
          </Text>
        </Box>
      </Column>
    </Modal>
  )
}

export { NotificationsModal }
