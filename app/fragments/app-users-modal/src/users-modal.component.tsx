import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'

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

import { UsersModalTheme }   from './users-modal.interfaces'
import { UsersModalProps }   from './users-modal.interfaces'

const UsersModal: FC<UsersModalProps> = ({ avatar, name, position }) => {
  const theme: UsersModalTheme = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const handleUserModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Modal open={true} width={773} padding={40}>
      <Column>
        <Row>
          <AtlantisSmallIcon width={26.4} height={24} />
          <Text maxWidth={215} marginBottom={12} marginLeft={15} fontSize={24} color='#282828'>
            Atlantis Main Team
          </Text>
        </Row>
        <Text maxWidth={244} marginBottom={12} fontSize={34} color='#282828'>
          Участники (15)
        </Text>
        <Scroll height={544}>
          <Box flexDirection={'column'} alignItems='flex-start' maxWidth={663}>
            <Row justifyContent='space-between' alignItems='center'>
              <Box
                // marginBottom={12}
                alignItems='center'
              >
                <Avatar size={50} image notification={true} src={avatar} alt='avatar' />
                <Column margin={10}>
                  <Text fontSize='normal.semiDefault'>{name}</Text>
                  <Text fontSize='small.semiLarge' color='#4D4D4D' marginTop={3}>
                    {position ? position : 'Frontend Developer'}
                  </Text>
                </Column>
              </Box>
              <Button
                style={{ position: 'relative', height: '39px' }}
                variant={'transparentBlueBackgroundButton'}
                shape={'rectangle'}
                size='microRoundedPadding'
                onClick={handleUserModal}
              >
                <ActionsIcon style={{ rotate: '90deg' }} width={15} height={15} />
                {isOpen && (
                  <Box
                    style={{ position: 'absolute' }}
                    boxShadow=' 0px 4px 8px 0px #00000026'
                    borderRadius={9}
                    background={theme.colors?.white}
                    width={180}
                    padding={12}
                    right={7}
                    top={40}
                  >
                    <Row justifyContent='flex-start' alignItems='center'>
                      <WrongOutlineIcon fill='#E95050' width={14} height={14} />
                      <Text marginLeft={2} color='#E95050' fontSize={13}>
                        Remove
                      </Text>
                    </Row>
                  </Box>
                )}
              </Button>
            </Row>
            <Divider
              weight={theme.space?.nano}
              backgroundColor={theme.backgrounds?.gray}
              marginTop={9.5}
              marginBottom={10.5}
            />
          </Box>
        </Scroll>
      </Column>
    </Modal>
  )
}

export { UsersModal }
