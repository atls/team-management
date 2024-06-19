import { useTheme }       from '@emotion/react'

import React              from 'react'
import { FC }             from 'react'
import { memo }           from 'react'

import { Divider }        from '@ui/divider'
import { ImageBlock }     from '@ui/image'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Text }           from '@ui/text'
import { ThemeType }      from '@ui/theme'

import { MemberDorpdown } from './member-dropdown/member-dropdown.component.js'

// TODO interface
export const Member: FC<any> = memo(({ memberData, onDeleteMemberClick }) => {
  const { memberId, memberName, memberPosition, memberAvatarSrc } = memberData

  const theme = useTheme() as ThemeType

  /* TODO change text to locales */

  return (
    <Box
      flexDirection='column'
      alignItems='flex-start'
      maxWidth={theme.spaces.superPuperExtraIncreased}
    >
      <Row justifyContent='space-between' alignItems='center'>
        <Box alignItems='center'>
          <Box
            width={theme.spaces.bigDecreased}
            height={theme.spaces.bigDecreased}
            borderRadius={theme.spaces.bigDecreased}
            overflow='hidden'
          >
            <ImageBlock src={memberAvatarSrc} alt='member-avatar' />
          </Box>
          <Column margin={theme.spaces.miniDefault}>
            <Text fontSize='normal.semiDefault'>{memberName}</Text>
            <Text
              fontSize='small.semiLarge'
              marginTop={theme.spaces.semiTiny}
              color='text.secondary'
            >
              {memberPosition}
            </Text>
          </Column>
        </Box>
        {/* TODO вынеси в компонент */}
        <MemberDorpdown memberId={memberId} onDeleteMemberClick={onDeleteMemberClick} />
      </Row>
      <Divider
        weight={theme.spaces.nano}
        marginTop={theme.spaces.minniSemiDefault}
        marginBottom={theme.spaces.miniDefault}
      />
    </Box>
  )
})
