import { useTheme }                    from '@emotion/react'

import React                           from 'react'
import { FC }                          from 'react'
import { memo }                        from 'react'
import { useState }                    from 'react'
import { useEffect }                   from 'react'
import { useContext }                  from 'react'
import { useIntl }                     from 'react-intl'

import { GetOrganizationMembersQuery } from '@globals/data'
import { ErrorMessageDispatchContext } from '@ui/error-message'
import { ImageBlock }                  from '@ui/image'
import { Box }                         from '@ui/layout'
import { Row }                         from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Modal }                       from '@ui/modal'
import { Scroll }                      from '@ui/scroll'
import { Text }                        from '@ui/text'
import { ThemeType }                   from '@ui/theme'

import { Member }                      from './member/index.js'
import { MemberDataType }              from './users-modal.interfaces.js'
import { UsersModalProps }             from './users-modal.interfaces.js'
import { getOrganizationMembersHook }  from './get-organization-members.hook.js'
import { removeMemberHook }            from './remove-member.hook.js'

export const UsersModal: FC<UsersModalProps> = memo(({
  open,
  onBackdropClick,
  organizationData,
}) => {
  const {
    id: organizationId,
    login: organizationLogin,
    name: organizationName,
    description: organizationDescription,
    membersWithRole: { totalCount: initMembersCount },
    avatarUrl: organizationCoverSrc,
    viewerCanAdminister,
  } = organizationData

  const { formatMessage } = useIntl()
  const theme = useTheme() as ThemeType

  const [membersData, setMembersData] = useState<Array<GetOrganizationMembersQuery>>([])
  const [membersCount, setMembersCount] = useState<number>(initMembersCount)

  const errorMessageDispatch = useContext(ErrorMessageDispatchContext) as VoidFunction

  useEffect(() => {
    if (open && !membersData.length) {
      setMembersCount(initMembersCount)
      getOrganizationMembersHook({
        open,
        membersData,
        organizationId,
        setMembersData,
        errorMessageDispatch,
      })
    }
  }, [open])

  const handlerRemoveMemberClick = (removeMemberLogin: string) =>
    removeMemberHook({ organizationLogin, membersData, setMembersData, removeMemberLogin })

  return (
    <Modal
      open={open}
      width={theme.spaces.extraLargeDecreased}
      padding={theme.spaces.increased}
      onBackdropClick={onBackdropClick}
    >
      <Column gap={theme.spaces.regular}>
        <Row gap={theme.spaces.medium} alignItems='center'>
          <Box width={theme.spaces.large}>
            <ImageBlock src={organizationCoverSrc} alt='organization-cover' />
          </Box>
          <Text maxWidth={theme.spaces.extraLargeDecreased} fontSize='normal.increased'>
            {organizationName}
            {organizationDescription && `, ${organizationDescription}`}
          </Text>
        </Row>
        <Text maxWidth={theme.spaces.largeSemiDecreasedDefault} fontSize='medium.semiIncreased'>
          {formatMessage({ id: 'users-modal.subTitle' })} ({membersCount})
        </Text>
        <Scroll maxHeight={theme.spaces.superExtraIncreasedDefault}>
          {membersData.map((memberData: MemberDataType, memberIndex) => (
            <Member
              memberData={memberData}
              onDeleteMemberClick={handlerRemoveMemberClick}
              viewerCanAdminister={viewerCanAdminister}
              devider={!(memberIndex === membersData.length - 1)}
            />
          ))}
        </Scroll>
      </Column>
    </Modal>
  )
})
