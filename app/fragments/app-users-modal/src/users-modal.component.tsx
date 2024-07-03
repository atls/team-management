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

import { Member }                     from './member/index.js'
import { MemberDataType }             from './users-modal.interfaces.js'
import { UsersModalProps }            from './users-modal.interfaces.js'
import { getOrganizatoinMembersData } from './get-organization-members-data.hook.js'

const UsersModal: FC<UsersModalProps> = memo(({ open, onBackdropClick, organizationData }) => {
  const {
    id: organizationId,
    name: organizationTitle,
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
      getOrganizatoinMembersData(organizationId, setMembersData).then((responseMemebersData) => {
        setMembersData(responseMemebersData)
      })
    }
  }, [open])

  const handlerDeleteMemberClick = (removeMemberId: number) => {
    const newMembersData = membersData.filter(({ memberId }) => memberId !== removeMemberId)
    setMembersData(newMembersData)
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
            {organizationTitle}
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
              devider={!(memberIndex === membersData.length - 1)}
            />
          ))}
        </Scroll>
      </Column>
    </Modal>
  )
})

export { UsersModal }
