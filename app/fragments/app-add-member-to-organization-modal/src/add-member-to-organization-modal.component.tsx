import type { InviteButtonStateType }             from '@app/invite-button'
import type { OrganizationTeamType }              from '@globals/data'
import type { OrganizationMemberDataType }        from '@globals/data'
import type { ThemeType }                         from '@ui/theme'
import type { FC }                                from 'react'

import type { AddMemberToOrganizationModalProps } from './add-member-to-organization-modal.interfaces.js'

import { FormattedMessage }                       from 'react-intl'
import { memo }                                   from 'react'
import { useState }                               from 'react'
import React                                      from 'react'

import { InviteButton }                           from '@app/invite-button'
import { SelectInputProvider }                    from '@stores/select-input'
import { Row }                                    from '@ui/layout'
import { Column }                                 from '@ui/layout'
import { Modal }                                  from '@ui/modal'
import { Text }                                   from '@ui/text'
import { useTheme }                               from '@emotion/react'
import { useToast }                               from '@stores/toast-notification'

import { AddMemberToOrganizationHook }            from './add-member-to-organization-modal.hook.js'
import { GithubUsersSearch }                      from './github-users-search/index.js'
import { TeamSwitch }                             from './team-switch/index.js'

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
  const [selectedUsers, setSelectedUsers] = useState<Array<OrganizationMemberDataType>>([])
  const [selectedTeams, setSelectedTeams] = useState<Array<OrganizationTeamType>>([])
  const [teamsData, setTeamsData] = useState<Array<OrganizationTeamType>>([])

  const { switchHandler, inviteButtonClickHandler } = AddMemberToOrganizationHook({
    open,
    toast,
    teamsData,
    setTeamsData,
    organizationId,
    organizationLogin,
    inviteButtonState,
    selectedUsers,
    setInviteButtonState,
    selectedTeams,
    setSelectedTeams,
  })

  return (
    <SelectInputProvider>
      <Modal open={open} width={theme.spaces.superPuperExtra} onBackdropClick={onBackdropClick}>
        <Column gap={theme.spaces.large}>
          <Text fontSize='medium.semiReduced' fontWeight='normal' padding={theme.spaces.micro}>
            <FormattedMessage id='add-member-to-organization-modal.header' />
          </Text>
          <GithubUsersSearch setSelectedUsersParentHook={setSelectedUsers} />
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
              <TeamSwitch
                teamName={teamName}
                onChange={(e) => {
                  switchHandler(e, teamId)
                }}
              />
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
    </SelectInputProvider>
  )
})
