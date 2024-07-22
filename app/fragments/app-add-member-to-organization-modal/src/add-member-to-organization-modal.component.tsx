import { useTheme }                          from '@emotion/react'

import React                                 from 'react'
import { FC }                                from 'react'
import { FormattedMessage }                  from 'react-intl'
import { memo }                              from 'react'
import { useState }                          from 'react'
import { useEffect }                         from 'react'

import { InviteButtonStateType }             from '@app/invite-button'
import { InviteButton }                      from '@app/invite-button'
import { GetOrganizationTeamsQuery }         from '@globals/data'
import { GetOrganizationMembersQuery }       from '@globals/data'
import { GithubSearchUsersInput }            from '@ui/input'
import { Row }                               from '@ui/layout'
import { Column }                            from '@ui/layout'
import { Modal }                             from '@ui/modal'
import { Text }                              from '@ui/text'
import { ThemeType }                         from '@ui/theme'
import { useToast }                          from '@ui/toast-notification'

import { AddMemberToOrganizationModalProps } from './add-member-to-organization-modal.interfaces.js'
import { HandlerSwitchType }                 from './add-member-to-organization-modal.interfaces.js'
import { TeamSwitch }                        from './team-switch/index.js'
import { getOrganizatoinTeamsHook }          from './hooks/index.js'
import { inviteButtonClickHook }             from './hooks/index.js'
import { setButtonActiveHook }               from './hooks/index.js'

export const AddMemberToOrganizationModal: FC<AddMemberToOrganizationModalProps> = memo(({
  open,
  onBackdropClick,
  organizationData,
}) => {
  const { id: organizationId } = organizationData
  const { login: organizationLogin } = organizationData

  const toast = useToast()
  const theme = useTheme() as ThemeType

  const [inviteButtonState, setInviteButtonState] = useState<InviteButtonStateType>('disabled')
  const [selectedUsers, setSelectedUsers] = useState<Array<GetOrganizationMembersQuery>>([])
  const [selectedTeams, setSelectedTeams] = useState<Array<GetOrganizationTeamsQuery>>([])
  const [teamsData, setTeamsData] = useState([])

  const handlerSwitch: HandlerSwitchType = (state, teamId) => {
    if (selectedTeams.includes(teamId as never)) {
      setSelectedTeams(selectedTeams.filter((c) => c !== (teamId as never)))
    } else {
      setSelectedTeams(selectedTeams.concat([teamId as never]))
    }
  }

  useEffect(
    () => setButtonActiveHook({ inviteButtonState, selectedUsers, setInviteButtonState }),
    [selectedUsers, inviteButtonState]
  )

  useEffect(() => {
    if (open && !teamsData.length) {
      getOrganizatoinTeamsHook({
        organizationId,
        setTeamsData,
        toast,
      })
    }
  }, [open, toast, organizationId, teamsData])

  const inviteButtonClickHandler = () =>
    inviteButtonClickHook({
      organizationLogin,
      selectedTeams,
      toast,
      selectedUsers,
      setInviteButtonState,
    })

  return (
    <Modal open={open} width={theme.spaces.superPuperExtra} onBackdropClick={onBackdropClick}>
      <Column flexDirection='column' gap={theme.spaces.large}>
        <Text fontSize='medium.semiReduced' fontWeight='normal' padding={theme.spaces.micro}>
          <FormattedMessage id='add-member-to-organization-modal.header' />
        </Text>
        <GithubSearchUsersInput
          modalButtonState={inviteButtonState}
          placeholder={<FormattedMessage id='add-member-to-organization-modal_input.placeholder' />}
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
            <FormattedMessage id='add-member-to-organization-modal.teams' />
          </Text>
          {teamsData.map(({ databaseId: teamId, name: teamName }) => (
            <TeamSwitch teamName={teamName} onChange={(e) => handlerSwitch(e, teamId)} />
          ))}
        </Row>
        <Row justifyContent='end'>
          <InviteButton
            inviteButtonState={inviteButtonState}
            inviteButtonClickHandler={inviteButtonClickHandler}
          />
        </Row>
      </Column>
    </Modal>
  )
})
