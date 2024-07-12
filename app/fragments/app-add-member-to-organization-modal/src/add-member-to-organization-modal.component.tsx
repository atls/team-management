import { useTheme }                          from '@emotion/react'

import React                                 from 'react'
import { FC }                                from 'react'
import { memo }                              from 'react'
import { useState }                          from 'react'
import { useEffect }                         from 'react'
import { useContext }                        from 'react'
import { useIntl }                           from 'react-intl'

import { Button }                            from '@ui/button'
import { ErrorMessageDispatchContext }       from '@ui/error-message'
import { GithubSearchUsersInput }            from '@ui/input'
import { Row }                               from '@ui/layout'
import { Column }                            from '@ui/layout'
import { Modal }                             from '@ui/modal'
import { Text }                              from '@ui/text'
import { ThemeType }                         from '@ui/theme'

import { AddMemberToOrganizationModalProps } from './add-member-to-organization-modal.interfaces.js'
import { SelectedUsersType }                 from './add-member-to-organization-modal.interfaces.js'
import { HandlerSwitchType }                 from './add-member-to-organization-modal.interfaces.js'
import { TeamSwitch }                        from './team-switch/index.js'
import { getOrganizatoinTeamsHook }          from './get-organization-teams.hook.js'
import { inviteButtonClickHook }             from './invite-button-click.hook.js'
import { setButtonActiveHook }               from './set-button-active.hook.js'

export const AddMemberToOrganizationModal: FC<AddMemberToOrganizationModalProps> = memo(({
  open,
  onBackdropClick,
  organizationData,
}) => {
  const { id: organizationId } = organizationData
  const { login: organizationLogin } = organizationData

  // const errorMessageDispatch = useContext(ErrorMessageDispatchContext)
  // console.log(errorMessageDispatch)

  const theme = useTheme() as ThemeType
  const { formatMessage } = useIntl()

  const [isButtonActive, setButtonActive] = useState<boolean>(false)
  const [selectedUsers, setSelectedUsers] = useState<SelectedUsersType>([])
  // TODO interface
  const [selectedTeams, setSelectedTeams] = useState<SelectedTeamsType>([])
  const [teamsData, setTeamsData] = useState([])

  const handlerSwitch: HandlerSwitchType = (state, teamId) => {
    if (selectedTeams.includes(teamId as never)) {
      setSelectedTeams(selectedTeams.filter((c) => c !== (teamId as never)))
    } else {
      setSelectedTeams(selectedTeams.concat([teamId as never]))
    }
  }

  const inviteButtonClickHandler = () =>
    inviteButtonClickHook({
      errorMessageDispatch,
      organizationLogin,
      selectedUsers,
      selectedTeams,
      onBackdropClick,
    })

  useEffect(() => setButtonActiveHook({ selectedUsers, setButtonActive }), [selectedUsers])

  useEffect(
    () => getOrganizatoinTeamsHook({ open, organizationId, teamsData, setTeamsData }),

    [open]
  )

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
            disabled={!isButtonActive}
            horizontalLocation='right'
            variant='blueBackgroundButton'
            size='middlingRoundedPadding'
            onClick={inviteButtonClickHandler}
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
