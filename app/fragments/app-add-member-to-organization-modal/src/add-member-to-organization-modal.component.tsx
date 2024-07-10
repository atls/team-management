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
import { inviteMemberToOrgaization }         from '@globals/data'

import { AddMemberToOrganizationModalProps } from './add-member-to-organization-modal.interfaces.js'
import { SelectedUsersType }                 from './add-member-to-organization-modal.interfaces.js'
import { CheckedSwitchesType }               from './add-member-to-organization-modal.interfaces.js'
import { HandlerSwitchType }                 from './add-member-to-organization-modal.interfaces.js'
import { TeamSwitch }                        from './team-switch/index.js'
import { getOrganizatoinTeamsData }          from './get-organization-teams.hook.js'
import { useButtonActiveHook }               from './use-button-active.hook.js'

export const AddMemberToOrganizationModal: FC<AddMemberToOrganizationModalProps> = memo(({
  open,
  onBackdropClick,
  organizationData,
}) => {
  const { id: organizationId } = organizationData
  const { login: organizationLogin } = organizationData

  const theme = useTheme() as ThemeType
  const { formatMessage } = useIntl()

  const [isButtonActive, setButtonActive] = useState<boolean>(false)
  const [checkedSwitches, setCheckedSwitches] = useState<CheckedSwitchesType>([])
  const [selectedUsers, setSelectedUsers] = useState<SelectedUsersType>([])
  // const [selectedTeams, setSelectedTeams] = useState<SelectedUsersType>([])
  const [teamsData, setTeamsData] = useState([])

  const handlerSwitch: HandlerSwitchType = (state, teamId) => {
    console.log(teamId)

    if (checkedSwitches.includes(teamId as never)) {
      setCheckedSwitches(checkedSwitches.filter((c) => c !== (teamId as never)))
    } else {
      setCheckedSwitches(checkedSwitches.concat([teamId as never]))
    }
  }

  const handlerInviteButtonClick = async () => {
    // TODO change var name
    console.log(checkedSwitches)

    const token = document.cookie.split('=').at(-1)

    for (const selectedUser of selectedUsers) {
      const { githubUserId } = selectedUser

      await inviteMemberToOrgaization({ token, organizationLogin, githubUserId })
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
    console.log(selectedUsers)
  }, [selectedUsers])

  useEffect(() => {
    console.log(organizationData)
    if (open) {
      getOrganizatoinTeamsData(organizationId).then((responseTeamsData) => {
        console.log(responseTeamsData)
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
          {teamsData.map(({ databaseId: teamId, name: teamName }) => (
            <TeamSwitch teamName={teamName} onChange={(e) => handlerSwitch(e, teamId)} />
          ))}
        </Row>
        <Row justifyContent='end'>
          <Button
            // disabled={!isButtonActive}
            horizontalLocation='right'
            variant='blueBackgroundButton'
            size='middlingRoundedPadding'
            onClick={handlerInviteButtonClick}
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
