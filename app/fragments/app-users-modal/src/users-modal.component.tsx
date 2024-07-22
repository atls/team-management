import { useTheme }                   from '@emotion/react'

import React                          from 'react'
import { FC }                         from 'react'
import { FormattedMessage }           from 'react-intl'
import { memo }                       from 'react'
import { useState }                   from 'react'
import { useEffect }                  from 'react'

import { ImageBlock }                 from '@ui/image'
import { Box }                        from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Modal }                      from '@ui/modal'
import { Scroll }                     from '@ui/scroll'
import { Text }                       from '@ui/text'
import { Space }                      from '@ui/text'
import { ThemeType }                  from '@ui/theme'
import { useToast }                   from '@ui/toast-notification'

import { Member }                     from './member/index.js'
import { UsersModalProps }            from './users-modal.interfaces.js'
import { getOrganizationMembersHook } from './get-organization-members.hook.js'
import { removeMemberHook }           from './remove-member.hook.js'

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

  const theme = useTheme() as ThemeType

  // TODO interface
  const [membersData, setMembersData] = useState<Array<any>>([])
  const [membersCount, setMembersCount] = useState<number>(initMembersCount)

  const toast = useToast()

  useEffect(() => {
    if (open && !membersData.length) {
      setMembersCount(initMembersCount)
      getOrganizationMembersHook({
        organizationId,
        setMembersData,
        toast,
      })
    }
  }, [open, toast, initMembersCount, membersData, organizationId])

  const handlerRemoveMemberClick = (removeMemberLogin: string) =>
    removeMemberHook({
      organizationLogin,
      membersData,
      setMembersData,
      removeMemberLogin,
      toast,
    })

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
          <FormattedMessage id='users-modal.subTitle' />
          <Space />({membersCount})
        </Text>
        <Scroll maxHeight={theme.spaces.superExtraIncreasedDefault}>
          {membersData.map((memberData, memberIndex) => (
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
