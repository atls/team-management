import { useTheme }               from '@emotion/react'

import React                      from 'react'
import { FC }                     from 'react'
import { useState }               from 'react'

import { Button }                 from '@ui/button'
import { Input }                  from '@ui/input'
import { Row }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Modal }                  from '@ui/modal'
import { Text }                   from '@ui/text'

import { OrganizationModalProps } from './organization-modal.interfaces'
import { TeamSwitch }             from './team-switch'

export const OrganizationModal: FC<OrganizationModalProps> = ({ open }) => {
  const theme: any = useTheme()

  const [isButtonActive, setButtonActive] = useState(false)
  const [checkedSwitches, setCheckedSwitches] = useState(0)
  // const [selectedMembers, setSelectedMembers] = useState([])

  const handlerSwitch = (switchState: boolean) => {
    if (switchState) setCheckedSwitches(checkedSwitches + 1)
    else setCheckedSwitches(checkedSwitches - 1)
  }

  const testUsersData = [
    {
      id: 1,
      firstName: 'test',
      lastName: 'user1',
      email: 'testmail1@mail.ru',
      avatarSrc: 'https://placehold.co/400',
    },
    {
      id: 2,
      firstName: 'test',
      lastName: 'user2',
      email: 'testmail2@mail.ru',
      avatarSrc: 'https://placehold.co/400',
    },
    {
      id: 3,
      firstName: 'Nikita',
      lastName: 'user3',
      email: 'testmail3@mail.ru',
      avatarSrc: 'https://placehold.co/400',
    },
  ]

  return (
    <Modal open={open} width={theme.spaces.superPuperExtra}>
      <Column flexDirection='column' gap={theme.spaces.large}>
        <Text fontSize='medium.semiReduced' fontWeight='normal' padding={theme.spaces.micro}>
          Добавить сотрудника в организацию
        </Text>
        <Input placeholder='Team member' searchItems={testUsersData} />
        <Row
          flexDirection='row'
          flexWrap='wrap'
          padding={theme.spaces.micro}
          justifyContent='space-between'
          rowGap={theme.spaces.large}
        >
          <Text fontSize='normal.semiIncreased' width='100%'>
            Команды организации
          </Text>
          <TeamSwitch teamName='Design' onChange={handlerSwitch} />
          <TeamSwitch teamName='Frontend' onChange={handlerSwitch} />
          <TeamSwitch teamName='Backend' onChange={handlerSwitch} />
          <TeamSwitch teamName={`Guest's`} onChange={handlerSwitch} />
        </Row>
        <Row justifyContent='end'>
          <Button
            disabled={!isButtonActive}
            horizontalLocation='right'
            variant='blueBackgroundButton'
            size='middlingRoundedPadding'
          >
            <Text fontSize='normal.semiDefault' fontWeight='normal'>
              Пригласить
            </Text>
          </Button>
        </Row>
      </Column>
    </Modal>
  )
}
