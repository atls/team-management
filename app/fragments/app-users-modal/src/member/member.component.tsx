import { useTheme }       from '@emotion/react'

import React              from 'react'
import { FC }             from 'react'
import { memo }           from 'react'

import { Condition }      from '@ui/condition'
import { Divider }        from '@ui/divider'
import { ImageBlock }     from '@ui/image'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Text }           from '@ui/text'
import { ThemeType }      from '@ui/theme'

import { MemberDorpdown } from './member-dropdown/member-dropdown.component.js'

// TODO interface
export const Member: FC<any> = memo(({ memberData, onDeleteMemberClick, devider = true }) => {
  const {
    id: memberId,
    url: memberUrl,
    name: memberName,
    bio: memberDescription,
    avatarUrl: memberAvatarSrc,
  } = memberData

  console.log(memberData)

  const theme = useTheme() as ThemeType

  /* TODO change text to locales */
  /* TODO if administer -> dropdown button */

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
            <ImageBlock src={memberAvatarSrc} alt='member-avatar' />
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
        <MemberDorpdown memberId={memberId} onDeleteMemberClick={onDeleteMemberClick} />
      </Row>
      <Condition match={devider}>
        <Box height={theme.spaces.miniReduced} width='100%'>
          <Divider weight={theme.spaces.nano} />
        </Box>
      </Condition>
    </Box>
  )
})
