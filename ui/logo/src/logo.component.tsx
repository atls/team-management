import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'

import { AtlantisIcon }      from '@ui/icons'
import { AtlantisSmallIcon } from '@ui/icons'
import { ThemeType }         from '@ui/theme'

// TODO interfaces
const Logo: FC<any> = ({ variant }) => {
  const theme = useTheme() as ThemeType

  if (variant === 'small') {
    return <AtlantisSmallIcon width={theme.spaces.large} height={theme.spaces.large} />
  }
  return <AtlantisIcon width={theme.spaces.semiSuperExtra} height={theme.spaces.large} />
}
export { Logo }
