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

import { AddMemberToOrganizationModalProps } from './add-member-to-organization-modal.interfaces.js'
import { SelectedUsersType }                 from './add-member-to-organization-modal.interfaces.js'
import { CheckedSwitchesType }               from './add-member-to-organization-modal.interfaces.js'
import { HandlerSwitchType }                 from './add-member-to-organization-modal.interfaces.js'
import { TeamSwitch }                        from './team-switch/index.js'
import { getOrganizatoinTeamsData }          from './get-organizations-team.hook.js'
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
  const [teamsData, setTeamsData] = useState([])

  const handlerSwitch: HandlerSwitchType = (state, teamId) => {
    if (checkedSwitches.includes(teamId as never)) {
      setCheckedSwitches(checkedSwitches.filter((c) => c !== (teamId as never)))
    } else {
      setCheckedSwitches(checkedSwitches.concat([teamId as never]))
    }
  }

  // TODO у каждой организации могут быть разные команды
  // нужно выводить свитчи в зависимости от тех команд, которые есть в организации

  // TODO button click hook
  // - добавление юсера в организацию и конкретную команду
  // - если не выбранна команда, можно добавлять юсера просто в организацию.
  // в общее лобби

  useButtonActiveHook(selectedUsers, checkedSwitches, setButtonActive)

  // TODO зачем этот эффект?
  useEffect(() => {
    // console.log(selectedUsers)
  }, [selectedUsers])

  useEffect(() => {
    if (open) {
      getOrganizatoinTeamsData(organizationId).then((responseTeamsData) => {
        setTeamsData(responseTeamsData)
      })
    }
  }, [open])

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
          {teamsData.map(({ id: teamId, name: teamName }) => (
            <TeamSwitch teamName={teamName} onChange={(e) => handlerSwitch(e, teamId)} />
          ))}
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
