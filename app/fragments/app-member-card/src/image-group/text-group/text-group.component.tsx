import type { ThemeType }     from '@ui/theme'

import type { TextGroupType } from './text-group.interfaces.ts'

import { FC }                 from 'react'
import React                  from 'react'

import { Column }             from '@ui/layout'
import { Text }               from '@ui/text'
import { useTheme }           from '@emotion/react'

export const TextGroup: FC<TextGroupType> = ({ name, bio }) => {
  const theme = useTheme() as ThemeType

  return (
    <Column>
      <Text color={theme.colors.white} fontSize='medium.semiDefault'>
        {name}
      </Text>
      <Text color={theme.colors.GRAY_300} fontSize='normal.semiDefault'>
        {bio}
      </Text>
    </Column>
  )
}
