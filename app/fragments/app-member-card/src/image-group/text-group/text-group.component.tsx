import { useTheme }  from '@emotion/react'

import React         from 'react'
import { FC }        from 'react'

import { Column }    from '@ui/layout'
import { Text }      from '@ui/text'
import { ThemeType } from '@ui/theme'

// TODO interface
export const TextGroup: FC<any> = ({ name, bio }) => {
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
