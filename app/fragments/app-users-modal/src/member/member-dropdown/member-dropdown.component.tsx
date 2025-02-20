import { FC }                  from 'react'
import React                   from 'react'

import { Dropdown }            from '@ui/dropdown'
import { WrongOutlineIcon }    from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Text }                from '@ui/text'
import { ThemeType }           from '@ui/theme'
import { useTheme }            from '@emotion/react'

import { MemberDorpdownProps } from './member-dropdown.interfaces.js'

export const MemberDorpdown: FC<MemberDorpdownProps> = ({ memberLogin, onDeleteMemberClick }) => {
  const theme = useTheme() as ThemeType
  return (
    <Dropdown>
      <Box
        alignItems='center'
        gap={theme.spaces.s4}
        cursor='pointer'
        onClick={() => onDeleteMemberClick(memberLogin)}
      >
        <WrongOutlineIcon width={theme.spaces.semiMedium} height={theme.spaces.semiMedium} />
        <Text fontSize='small.semiLarge' color='red'>
          Remove
        </Text>
      </Box>
    </Dropdown>
  )
}
