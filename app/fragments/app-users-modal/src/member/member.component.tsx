import type { ThemeType }   from '@ui/theme'
import type { FC }          from 'react'

import type { MemberProps } from './member.interfaces.js'

import { useTheme }         from '@emotion/react'
import { memo }             from 'react'
// @ts-expect-error:next-line
import Link                 from 'next/link'
import React                from 'react'

import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

import { MemberDorpdown }   from './member-dropdown/member-dropdown.component.js'

export const Member: FC<MemberProps> = memo(({
  memberData,
  onDeleteMemberClick,
  devider = true,
  viewerCanAdminister,
}) => {
  const {
    login: memberLogin,
    url: memberUrl,
    name: memberName,
    bio: memberDescription,
    avatarUrl: memberAvatarSrc,
  } = memberData

  const theme = useTheme() as ThemeType

  return (
    <Box
      flexDirection='column'
      alignItems='flex-start'
      maxWidth={theme.spaces.superPuperExtraIncreased}
    >
      <Row justifyContent='space-between' alignItems='center' padding={theme.spaces.v8h12}>
        <Box alignItems='center' gap={theme.spaces.regular}>
          <Box
            width={theme.spaces.bigDecreased}
            borderRadius={theme.spaces.bigDecreased}
            overflow='hidden'
          >
            <Link href={memberUrl || '/'} target='_blank'>
              <ImageBlock src={memberAvatarSrc} alt='member-avatar' />
            </Link>
          </Box>
          <Column>
            <Text fontSize='normal.semiDefault'>{memberName}</Text>
            <Text
              fontSize='small.semiLarge'
              marginTop={theme.spaces.semiTiny}
              color='text.secondary'
            >
              {memberDescription}
            </Text>
          </Column>
        </Box>
        <Condition match={viewerCanAdminister}>
          <MemberDorpdown memberLogin={memberLogin} onDeleteMemberClick={onDeleteMemberClick} />
        </Condition>
      </Row>
      <Condition match={devider}>
        <Box height={theme.spaces.miniReduced} width='100%'>
          <Divider weight={theme.spaces.nano} />
        </Box>
      </Condition>
    </Box>
  )
})
