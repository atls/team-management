import { useTheme }                          from '@emotion/react'

import React                                 from 'react'
import { FC }                                from 'react'
import { useState }                          from 'react'
import { useEffect }                         from 'react'

import { Button }                            from '@ui/button'
import { SelectInput }                       from '@ui/input'
import { Row }                               from '@ui/layout'
import { Column }                            from '@ui/layout'
import { Modal }                             from '@ui/modal'
import { Text }                              from '@ui/text'

import { AddMemberToOrganizationModalProps } from './add-member-to-organization-modal.interfaces'
import { TeamSwitch }                        from './team-switch'

export const AddMemberToOrganizationModal: FC<AddMemberToOrganizationModalProps> = ({ open }) => {
  const theme: any = useTheme()

  const [isButtonActive, setButtonActive] = useState(false)
  const [checkedSwitches, setCheckedSwitches] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])

  const handlerSwitch = (e, category) => {
    if (checkedSwitches.includes(category)) {
      setCheckedSwitches(checkedSwitches.filter((c) => c != category))
    } else {
      setCheckedSwitches(checkedSwitches.concat([category]))
    }
  }

  useEffect(() => {
    if (selectedUsers.length && checkedSwitches.length) setButtonActive(true)
    else setButtonActive(false)
  }, [selectedUsers, checkedSwitches])

  const testUsersData = [
    {
      id: 1,
      primaryInfo: 'test user1',
      secondaryInfo: 'testmail1@mail.ru',
      imageSrc: 'https://placehold.co/400',
    },
    {
      id: 2,
      primaryInfo: 'test user2',
      secondaryInfo: 'testmail2@mail.ru',
      imageSrc: 'https://placehold.co/400',
    },
    {
      id: 3,
      primaryInfo: 'test user3',
    },
  ]

  return (
    <Modal open={open} width={theme.spaces.superPuperExtra}>
      <Column flexDirection='column' gap={theme.spaces.large}>
        <Text fontSize='medium.semiReduced' fontWeight='normal' padding={theme.spaces.micro}>
          Добавить сотрудника в организацию
        </Text>
        <SelectInput
          placeholder='Team member'
          searchItems={testUsersData}
          parentHook={setSelectedUsers}
        />
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
          <TeamSwitch teamName='Design' onChange={(e) => handlerSwitch(e, 'design')} />
          <TeamSwitch teamName='Frontend' onChange={(e) => handlerSwitch(e, 'frontend')} />
          <TeamSwitch teamName='Backend' onChange={(e) => handlerSwitch(e, 'backend')} />
          <TeamSwitch teamName={`Guest's`} onChange={(e) => handlerSwitch(e, 'guests')} />
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
