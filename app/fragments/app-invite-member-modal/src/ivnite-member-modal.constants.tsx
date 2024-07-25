import React            from 'react'

import { GitHubIcon }   from '@ui/icons'
import { FigmaIcon }    from '@ui/icons'
import { DiscordIcon }  from '@ui/icons'
import { TelegramIcon } from '@ui/icons'
import { ThemeType }    from '@ui/theme'

export const getSwitchList = (theme: ThemeType) => {
  const ICON_PROPS = {
    width: theme.spaces.large,
    height: theme.spaces.large,
    color: 'none',
  }

  const SWITCH_DATA_LIST = [
    {
      icon: <GitHubIcon {...ICON_PROPS} />,
      switchData: process.env.NEXT_PUBLIC_INVITE_GITHUB_ORG_NAME as string,
    },
    {
      icon: <FigmaIcon {...ICON_PROPS} />,
      switchData: process.env.NEXT_PUBLIC_INVITE_FIGMA_URL as string,
    },
    {
      icon: <DiscordIcon {...ICON_PROPS} />,
      switchData: process.env.NEXT_PUBLIC_INVITE_DISCORD_URL as string,
    },
    {
      icon: <TelegramIcon {...ICON_PROPS} />,
      switchData: process.env.NEXT_PUBLIC_INVITE_TELEGRAM as string,
    },
  ]

  return SWITCH_DATA_LIST
}
