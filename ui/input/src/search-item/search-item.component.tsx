import React               from 'react'
import { FC }              from 'react'

import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Text }            from '@ui/text'

import { SearchItemProps } from './search-item.interfaces'

export const SearchItem: FC<SearchItemProps> = ({
  firstName,
  lastName,
  email,
  avatarSrc,
  onClick,
}) => {
  // TODO useTheme
  return (
    <Box
      onClick={onClick}
      cursor='pointer'
      width='min-content'
      height='min-content'
      justifyContent='center'
      alignItems='center'
      gap={12}
      backgroundColor='white'
      padding={8}
      borderRadius={12}
    >
      <Box width={40} height={40} borderRadius={24} overflow='hidden'>
        <ImageBlock src={avatarSrc} />
      </Box>
      <Column gap={0}>
        <Text fontSize='small.semiLarge' color='#282828'>
          {firstName} {lastName}
        </Text>
        <Text fontSize='small.default' color='#797979'>
          {email}
        </Text>
      </Column>
    </Box>
  )
}
