import type { OrganizationMemberDataType } from '@globals/data'
import type { ThemeType }                  from '@ui/theme'
import type { FC }                         from 'react'
import type { JSX }                        from 'react'

import type { UsersModalProps }            from './users-modal.interfaces.js'

import { FormattedMessage }                from 'react-intl'
import { memo }                            from 'react'
import { useState }                        from 'react'
import { useEffect }                       from 'react'
import React                               from 'react'

import { ImageBlock }                      from '@ui/image'
import { Box }                             from '@ui/layout'
import { Row }                             from '@ui/layout'
import { Column }                          from '@ui/layout'
import { Modal }                           from '@ui/modal'
import { Scroll }                          from '@ui/scroll'
import { Text }                            from '@ui/text'
import { Space }                           from '@ui/text'
import { useTheme }                        from '@emotion/react'
import { useToast }                        from '@stores/toast-notification'

import { Member }                          from './member/index.js'
import { getOrganizationMembersHook }      from './hooks/index.js'
import { removeMemberHook }                from './hooks/index.js'

export const UsersModal: FC<UsersModalProps> = memo(({
  open,
  onBackdropClick,
  organizationData,
}): JSX.Element => {
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
  const toast = useToast()

  const [membersData, setMembersData] = useState<Array<OrganizationMemberDataType>>([])
  const [membersCount, setMembersCount] = useState<number>(initMembersCount)

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

  const handlerRemoveMemberClick = (removeMemberLogin: string): void => {
    removeMemberHook({
      organizationLogin,
      membersData,
      setMembersData,
      removeMemberLogin,
      toast,
    })
  }

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
            {!!organizationDescription && `, ${organizationDescription}`}
          </Text>
        </Row>
        <Text maxWidth={theme.spaces.largeSemiDecreasedDefault} fontSize='medium.semiIncreased'>
          <FormattedMessage id='users-modal.subTitle' />
          <Space />({membersCount})
        </Text>
        <Scroll maxHeight={theme.spaces.superExtraIncreasedDefault}>
          {membersData.map((memberData, memberIndex) => (
            <Member
              key={memberData.id}
              memberData={memberData}
              viewerCanAdminister={viewerCanAdminister}
              devider={!(memberIndex === membersData.length - 1)}
              onDeleteMemberClick={handlerRemoveMemberClick}
            />
          ))}
        </Scroll>
      </Column>
    </Modal>
  )
})
