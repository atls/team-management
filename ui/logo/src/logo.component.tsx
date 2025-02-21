import type { ThemeType }    from '@ui/theme'
import type { FC }           from 'react'

import type { LogoProps }    from './logo.interfaces.js'

import React                 from 'react'

import { AtlantisIcon }      from '@ui/icons'
import { AtlantisSmallIcon } from '@ui/icons'
import { useTheme }          from '@emotion/react'

const Logo: FC<LogoProps> = ({ variant, activeTheme }) => {
  const theme = useTheme() as ThemeType

  if (activeTheme === 'dark') {
    const LOGO_COLOR = theme.colors.icon

    if (variant === 'small') {
      return (
        <AtlantisSmallIcon
          width={theme.spaces.large}
          height={theme.spaces.large}
          color={LOGO_COLOR}
        />
      )
    }
    return (
      <AtlantisIcon
        width={theme.spaces.semiSuperExtra}
        height={theme.spaces.large}
        color={LOGO_COLOR}
      />
    )
  }

  if (variant === 'small') {
    return <AtlantisSmallIcon width={theme.spaces.large} height={theme.spaces.large} />
  }

  return <AtlantisIcon width={theme.spaces.semiSuperExtra} height={theme.spaces.large} />
}
export { Logo }
