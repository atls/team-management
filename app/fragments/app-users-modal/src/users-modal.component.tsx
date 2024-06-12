import { useTheme }        from '@emotion/react'

import React               from 'react'
import { FC }              from 'react'
import { memo }            from 'react'
import { useState }        from 'react'
import { useIntl }         from 'react-intl'

import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Modal }           from '@ui/modal'
import { Scroll }          from '@ui/scroll'
import { Text }            from '@ui/text'
import { ThemeType }       from '@ui/theme'

import { Member }          from './member/index.js'
import { UsersModalProps } from './users-modal.interfaces.js'

const UsersModal: FC<UsersModalProps> = memo(({
  // avatar,
  // name,
  // position,
  // usersCount,
  open,
  onBackdropClick,
  ...organizationData
}) => {
  const {
    organizationId,
    organizationTitle,
    organizationDescription,
    organizationMembersQuantity,
    organizationCoverSrc,
  } = organizationData

  const MEMBER_TEST_DATA = {
    memberId: 1,
    memberName: 'Brooklyn Simmons',
    memberPosition: 'Frontend developer',
    memberAvatarSrc:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sWCvltMZF_s3mjA5sL-RdgHaE8%26pid%3DApi&f=1&ipt=75b1307f72623776b37217b88a805f10036ed22338715def57bb6eeb6c55323b&ipo=images',
  }

  const { formatMessage } = useIntl()
  const theme = useTheme() as ThemeType

  const [membersData, setMembersData] = useState([
    MEMBER_TEST_DATA,
    MEMBER_TEST_DATA,
    MEMBER_TEST_DATA,
    MEMBER_TEST_DATA,
  ])

  const handlerDeleteMemberClick = (removeMemberId) => {
    const newMembersData = membersData.filter(({ memberId }) => memberId !== removeMemberId)
    setMembersData(newMembersData)
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
          <Box width={theme.spaces.large} height={theme.spaces.large}>
            <ImageBlock src={organizationCoverSrc} alt='organization-cover' />
          </Box>
          <Text
            maxWidth={theme.spaces.extraLargeDecreased}
            fontSize='normal.increased'
            color='GRAY_1600'
          >
            {organizationTitle}, {organizationDescription}
          </Text>
        </Row>
        <Text
          maxWidth={theme.spaces.largeSemiDecreasedDefault}
          fontSize='medium.semiIncreased'
          color='GRAY_1600'
        >
          {formatMessage({ id: 'users-modal.subTitle' })} ({organizationMembersQuantity})
        </Text>
        <Scroll height={theme.spaces.superExtraIncreasedDefault}>
          {membersData.map((memberData) => (
            <Member memberData={memberData} onDeleteMemberClick={handlerDeleteMemberClick} />
          ))}
        </Scroll>
      </Column>
    </Modal>
  )
})

export { UsersModal }
