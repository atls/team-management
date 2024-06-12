import { useTheme }         from '@emotion/react'

import React                from 'react'
import { FC }               from 'react'

import { Dropdown }         from '@ui/dropdown'
import { WrongOutlineIcon } from '@ui/icons'
import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'
import { ThemeType }        from '@ui/theme'

export const MemberDorpdown: FC<any> = ({ memberId, onDeleteMemberClick }) => {
  const theme = useTheme() as ThemeType
  return (
    <Dropdown>
      <Box
        alignItems='center'
        gap={theme.spaces.s4}
        cursor='pointer'
        onClick={() => onDeleteMemberClick(memberId)}
      >
        <WrongOutlineIcon width={theme.spaces.semiMedium} height={theme.spaces.semiMedium} />
        <Text fontSize='small.semiLarge' color='red'>
          Remove
        </Text>
      </Box>
    </Dropdown>
  )
}
