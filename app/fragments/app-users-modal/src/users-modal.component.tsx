import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { useState }          from 'react'
import { useIntl }           from 'react-intl'

import { Avatar }            from '@ui/avatar'
import { Button }            from '@ui/button'
import { Divider }           from '@ui/divider'
import { ActionsIcon }       from '@ui/icons'
import { WrongOutlineIcon }  from '@ui/icons'
import { AtlantisSmallIcon } from '@ui/icons'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Modal }             from '@ui/modal'
import { Scroll }            from '@ui/scroll'
import { Text }              from '@ui/text'
import { ThemeType }         from '@ui/theme'

import { UsersModalProps }   from './users-modal.interfaces.js'

const UsersModal: FC<UsersModalProps> = ({ avatar, name, position, usersCount, open }) => {
  const { formatMessage } = useIntl()
  const theme = useTheme() as ThemeType
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleUserModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Modal open={open} width={theme.spaces.extraLargeDecreased} padding={theme.spaces.increased}>
      <Column>
        <Row>
          <AtlantisSmallIcon width={theme.spaces.largest} height={theme.spaces.large} />
          <Text
            maxWidth={theme.spaces.extraLargeDecreased}
            marginBottom={theme.spaces.micro}
            marginLeft={theme.spaces.middling}
            fontSize='normal.increased'
            color='GRAY_1600'
          >
            {formatMessage({ id: 'users-modal.title' })}
          </Text>
        </Row>
        <Text
          maxWidth={theme.spaces.largeSemiDecreasedDefault}
          marginBottom={theme.spaces.micro}
          fontSize='medium.semiIncreased'
          color='GRAY_1600'
        >
          {formatMessage({ id: 'users-modal.subTitle' })} ({usersCount})
        </Text>
        <Scroll height={theme.spaces.superExtraIncreasedDefault}>
          <Box
            flexDirection='column'
            alignItems='flex-start'
            maxWidth={theme.spaces.superPuperExtraIncreased}
          >
            <Row justifyContent='space-between' alignItems='center'>
              <Box alignItems='center'>
                <Avatar
                  size={theme.spaces.bigDecreased}
                  image
                  notification={true}
                  src={avatar}
                  alt='avatar'
                />
                <Column margin={theme.spaces.miniDefault}>
                  <Text fontSize='normal.semiDefault'>{name}</Text>
                  <Text
                    fontSize='small.semiLarge'
                    color='outerspace'
                    marginTop={theme.spaces.semiTiny}
                  >
                    {position ? position : 'Frontend Developer'}
                  </Text>
                </Column>
              </Box>
              <Button
                style={{ position: 'relative' }}
                variant='transparentBlueBackgroundButton'
                shape='rectangle'
                size='microRoundedPadding'
                onClick={handleUserModal}
              >
                <ActionsIcon
                  style={{ rotate: '90deg' }}
                  width={theme.spaces.middling}
                  height={theme.spaces.middling}
                />
                {isOpen && (
                  <Box
                    style={{ position: 'absolute' }}
                    boxShadow={theme.shadows.asphalt}
                    borderRadius={theme.spaces.minniSemiDefault}
                    background={theme.colors.white}
                    width={theme.spaces.semiSuperDecreased}
                    padding={theme.spaces.micro}
                    right={theme.spaces.miniSemiReduced}
                    top={theme.spaces.increased}
                  >
                    <Row justifyContent='flex-start' alignItems='center'>
                      <WrongOutlineIcon
                        width={theme.spaces.semiMedium}
                        height={theme.spaces.semiMedium}
                      />
                      <Text
                        marginLeft={theme.spaces.normalCount}
                        color='carnation'
                        fontSize='small.semiLarge'
                      >
                        {formatMessage({ id: 'users-modal.button-remove' })}
                      </Text>
                    </Row>
                  </Box>
                )}
              </Button>
            </Row>
            <Divider
              weight={theme.spaces.nano}
              backgroundColor={theme.backgrounds.gray}
              marginTop={theme.spaces.minniSemiDefault}
              marginBottom={theme.spaces.miniDefault}
            />
          </Box>
        </Scroll>
      </Column>
    </Modal>
  )
}

export { UsersModal }
