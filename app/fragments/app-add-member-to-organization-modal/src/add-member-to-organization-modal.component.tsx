import { useTheme }                          from '@emotion/react'

import React                                 from 'react'
import { FC }                                from 'react'
import { memo }                              from 'react'
import { useState }                          from 'react'
import { useEffect }                         from 'react'
import { useIntl }                           from 'react-intl'

import { Button }                            from '@ui/button'
import { GithubSearchUsersInput }            from '@ui/input'
import { Row }                               from '@ui/layout'
import { Column }                            from '@ui/layout'
import { Modal }                             from '@ui/modal'
import { Text }                              from '@ui/text'
import { ThemeType }                         from '@ui/theme'

import { USERS_TEST_DATA }                   from './add-member-to-organization-modal.constants.js'
import { AddMemberToOrganizationModalProps } from './add-member-to-organization-modal.interfaces.js'
import { SelectedUsersType }                 from './add-member-to-organization-modal.interfaces.js'
import { CheckedSwitchesType }               from './add-member-to-organization-modal.interfaces.js'
import { HandlerSwitchType }                 from './add-member-to-organization-modal.interfaces.js'
import { TeamSwitch }                        from './team-switch/index.js'
import { useButtonActiveHook }               from './use-button-active.hook.js'

export const AddMemberToOrganizationModal: FC<AddMemberToOrganizationModalProps> = memo(({
  open,
  onBackdropClick,
  organizationId,
}) => {
  const theme = useTheme() as ThemeType
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

  // TODO у каждой организации могут быть разные команды
  // нужно выводить свитчи в зависимости от тех команд, которые есть в организации

  // TODO button click hook
  // - добавление юсера в организацию и конкретную команду
  // - если не выбранна команда, можно добавлять юсера просто в организацию.
  // в общее лобби

  useButtonActiveHook(selectedUsers, checkedSwitches, setButtonActive)

  useEffect(() => {
    console.log(selectedUsers)
  }, [selectedUsers])

  return (
    <Modal open={open} width={theme.spaces.superPuperExtra} onBackdropClick={onBackdropClick}>
      <Column flexDirection='column' gap={theme.spaces.large}>
        <Text fontSize='medium.semiReduced' fontWeight='normal' padding={theme.spaces.micro}>
          {formatMessage({ id: 'add-member-to-organization-modal.header' })}
        </Text>
        <GithubSearchUsersInput
          placeholder={formatMessage({ id: 'add-member-to-organization-modal_input.placeholder' })}
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
            {formatMessage({ id: 'add-member-to-organization-modal.teams' })}
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
            <Text fontSize='normal.semiDefault' fontWeight='normal' color={theme.colors.white}>
              {formatMessage({ id: 'add-member-to-organization-modal.button' })}
            </Text>
          </Button>
        </Row>
      </Column>
    </Modal>
  )
})
