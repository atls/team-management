import { FC }                      from 'react'
import { FormattedMessage }        from 'react-intl'
import React                       from 'react'

import { Avatar }                  from '@ui/avatar'
import { Divider }                 from '@ui/divider'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Modal }                   from '@ui/modal'
import { Scroll }                  from '@ui/scroll'
import { Text }                    from '@ui/text'
import { Space }                   from '@ui/text'
import { ThemeType }               from '@ui/theme'
import { useTheme }                from '@emotion/react'

import { NotificationsModalProps } from './notifications-modal.interfaces.js'

const NotificationsModal: FC<NotificationsModalProps> = ({
  avatar,
  name,
  date,
  open,
  notifiaction,
  onBackdropClick,
}) => {
  const theme = useTheme() as ThemeType

  return (
    <Modal
      top={theme.spaces.huge}
      left='auto'
      bottom='auto'
      right={theme.spaces.mini}
      open={open}
      position='absolute'
      width={theme.spaces.largeSemiLargeIncreased}
      onBackdropClick={onBackdropClick}
    >
      <Column>
        <Text marginBottom={theme.spaces.micro} fontSize='medium.semiReduced' color='GRAY_1600'>
          <FormattedMessage id='notifications-modal.title' />
        </Text>
        <Scroll height={theme.spaces.largeSemiDecreased}>
          <Box
            flexDirection='column'
            alignItems='flex-start'
            maxWidth={theme.spaces.largeDefaultIncreased}
          >
            <Box marginBottom={theme.spaces.micro}>
              <Avatar
                size={theme.spaces.bigDecreased}
                image
                notification={notifiaction}
                src={avatar}
                alt='avatar'
              />
              <Column margin={theme.spaces.tiny}>
                <Text fontSize='small.semiLarge'>
                  {name}
                  <Space count={1} />
                  <Text fontWeight='semiBold'> accepted the invite</Text>
                </Text>
                <Text fontSize='small.default' color='silverchalice' marginTop={theme.spaces.s5}>
                  {date}
                </Text>
              </Column>
            </Box>
            <Divider
              weight={theme.spaces.nano}
              backgroundColor={theme.backgrounds.gray}
              marginTop={theme.spaces.minniSemiDefault}
              marginBottom={theme.spaces.tiny}
            />
          </Box>
        </Scroll>

        <Box justifyContent='center'>
          <Text color='indigo' marginBottom={theme.spaces.micro} fontSize='normal.semiDefault'>
            <FormattedMessage id='notifications-modal.mark-all-read' />
          </Text>
        </Box>
      </Column>
    </Modal>
  )
}

export { NotificationsModal }
