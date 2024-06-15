import { useTheme }     from '@emotion/react'

import React            from 'react'
import { FC }           from 'react'

import { AtlantisIcon } from '@ui/icons'
import { ThemeType }    from '@ui/theme'

const Logo: FC = ({ ...props }) => {
  const theme = useTheme() as ThemeType
  return <AtlantisIcon width={theme.spaces.semiSuperExtra} height={theme.spaces.large} />
}
export { Logo }
