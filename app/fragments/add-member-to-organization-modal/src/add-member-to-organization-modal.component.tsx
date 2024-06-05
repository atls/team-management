import { useTheme }                          from '@emotion/react'

import React                                 from 'react'
import { FC }                                from 'react'
import { memo }                              from 'react'
import { useState }                          from 'react'
import { useCallback }                       from 'react'
import { useIntl }                           from 'react-intl'

import { Button }                            from '@ui/button'
import { SelectInput }                       from '@ui/input'
import { Row }                               from '@ui/layout'
import { Column }                            from '@ui/layout'
import { Modal }                             from '@ui/modal'
import { Text }                              from '@ui/text'

import { AddMemberToOrganizationModalProps } from './add-member-to-organization-modal.interfaces.js'
import { SelectedUsersType }                 from './add-member-to-organization-modal.interfaces.js'
import { CheckedSwitchesType }               from './add-member-to-organization-modal.interfaces.js'
import { HandlerSwitchType }                 from './add-member-to-organization-modal.interfaces.js'
import { TeamSwitch }                        from './team-switch/index.js'
import { useButtonActiveHook }               from './use-button-active.hook.js'

export const AddMemberToOrganizationModal: FC<AddMemberToOrganizationModalProps> = memo(({
  open,
}) => {
  const theme: any = useTheme()
  const { formatMessage } = useIntl()

  const [isButtonActive, setButtonActive] = useState<boolean>(false)
  const [checkedSwitches, setCheckedSwitches] = useState<CheckedSwitchesType>([])
  const [selectedUsers, setSelectedUsers] = useState<SelectedUsersType>([])

  const handlerSwitch: HandlerSwitchType = (state, category) => {
    if (checkedSwitches.includes(category as never)) {
      setCheckedSwitches(checkedSwitches.filter((c) => c !== (category as never)))
    } else {
      setCheckedSwitches(checkedSwitches.concat([category as never]))
    }
  }

  const setSelectedUsersCallback = useCallback((item) => {
    setSelectedUsers(item)
  }, [])

  useButtonActiveHook(selectedUsers, checkedSwitches, setButtonActive)

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
          {formatMessage({ id: 'add-member-to-organization-modal.header' })}
        </Text>
        <SelectInput
          placeholder={formatMessage({ id: 'add-member-to-organization-modal_input.placeholder' })}
          searchItems={testUsersData}
          parentHook={setSelectedUsersCallback}
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
})
