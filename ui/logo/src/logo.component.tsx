import { useTheme }     from '@emotion/react'

import React            from 'react'
import { FC }           from 'react'

import { AtlantisIcon } from '@ui/icons'

import { AvatarTheme }  from './logo.interfaces'

const Logo: FC = ({ ...props }) => {
  const theme: AvatarTheme = useTheme()
  return <AtlantisIcon width={theme.spaces?.semiSuperExtra} height={theme.spaces?.large} />
}
export { Logo }
