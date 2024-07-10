import { useTheme }                   from '@emotion/react'

import React                          from 'react'
import { FC }                         from 'react'
import { memo }                       from 'react'
import { useState }                   from 'react'
import { useEffect }                  from 'react'
import { useIntl }                    from 'react-intl'

import { ImageBlock }                 from '@ui/image'
import { Box }                        from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Modal }                      from '@ui/modal'
import { Scroll }                     from '@ui/scroll'
import { Text }                       from '@ui/text'
import { ThemeType }                  from '@ui/theme'
import { removeOrganizationMember }   from '@globals/data'

import { Member }                     from './member/index.js'
import { MemberDataType }             from './users-modal.interfaces.js'
import { UsersModalProps }            from './users-modal.interfaces.js'
import { getOrganizatoinMembersData } from './get-organization-members-data.hook.js'

const UsersModal: FC<UsersModalProps> = memo(({ open, onBackdropClick, organizationData }) => {
  const {
    id: organizationId,
    login: organizationLogin,
    name: organizationName,
    description: organizationDescription,
    membersWithRole: { totalCount: membersCount },
    avatarUrl: organizationCoverSrc,
    viewerCanAdminister,
  } = organizationData

  // TODO administer to dropdown button

  const { formatMessage } = useIntl()
  const theme = useTheme() as ThemeType

  // TODO interface
  const [membersData, setMembersData] = useState([])

  // TODO вынести в хук
  useEffect(() => {
    if (open && !membersData.length) {
      getOrganizatoinMembersData(organizationId).then((responseMemebersData) => {
        setMembersData(responseMemebersData)
      })
    }
  }, [open])

  const handlerDeleteMemberClick = (removeMemberLogin: string) => {
    // TODO query to delete member -> than delete from cli
    // TODO get token from cli to helpers
    const token = document.cookie.split('=').at(-1)

    removeOrganizationMember({ token, memberLogin: removeMemberLogin, organizationLogin }).then(
      () => {
        console.log('after success remove')
        // const newMembersData = membersData.filter(({ memberId }) => memberId !== removeMemberId)
        // setMembersData(newMembersData)
      }
    )
  }

  // IDEA передавать в список количество сотрудников и забивать пустыми элементами.
  // IDEA после того, как приходят данные менять пустышки на реальные данные

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
              onDeleteMemberClick={handlerDeleteMemberClick}
              viewerCanAdminister={viewerCanAdminister}
              devider={!(memberIndex === membersData.length - 1)}
            />
          ))}
        </Scroll>
      </Column>
    </Modal>
  )
})

export { UsersModal }
