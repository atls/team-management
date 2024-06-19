import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { memo }              from 'react'
import { useState }          from 'react'
import { useIntl }           from 'react-intl'

import { ImageBlock }        from '@ui/image'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Modal }             from '@ui/modal'
import { Scroll }            from '@ui/scroll'
import { Text }              from '@ui/text'
import { ThemeType }         from '@ui/theme'

import { Member }            from './member/index.js'
import { MEMBERS_TEST_DATA } from './users-modal.constants.js'
import { MemberDataType }    from './users-modal.interfaces.js'
import { UsersModalProps }   from './users-modal.interfaces.js'

const UsersModal: FC<UsersModalProps> = memo(({ open, onBackdropClick, organizationData }) => {
  const {
    // organizationId,
    organizationTitle,
    organizationDescription,
    organizationMembersQuantity,
    organizationCoverSrc,
  } = organizationData

  const { formatMessage } = useIntl()
  const theme = useTheme() as ThemeType

  const [membersData, setMembersData] = useState(MEMBERS_TEST_DATA)

  const handlerDeleteMemberClick = (removeMemberId: number) => {
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
          <Text maxWidth={theme.spaces.extraLargeDecreased} fontSize='normal.increased'>
            {organizationTitle}, {organizationDescription}
          </Text>
        </Row>
        <Text maxWidth={theme.spaces.largeSemiDecreasedDefault} fontSize='medium.semiIncreased'>
          {formatMessage({ id: 'users-modal.subTitle' })} ({organizationMembersQuantity})
        </Text>
        <Scroll height={theme.spaces.superExtraIncreasedDefault}>
          {membersData.map((memberData: MemberDataType) => (
            <Member memberData={memberData} onDeleteMemberClick={handlerDeleteMemberClick} />
          ))}
        </Scroll>
      </Column>
    </Modal>
  )
})

export { UsersModal }
