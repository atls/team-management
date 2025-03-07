import type { ThemeType }      from '@ui/theme'

import type { SwitchDataItem } from './invite-member-modal.interfaces.js'

import React                   from 'react'

import { GitHubIcon }          from '@ui/icons'
import { FigmaIcon }           from '@ui/icons'
import { DiscordIcon }         from '@ui/icons'
import { TelegramIcon }        from '@ui/icons'

export const getSwitchList = (theme: ThemeType): Array<SwitchDataItem> => {
  const ICON_PROPS = {
    width: theme.spaces.large,
    height: theme.spaces.large,
    color: 'none',
  }

  const SWITCH_DATA_LIST = [
    {
      icon: <GitHubIcon {...ICON_PROPS} />,
      switchData: process.env.NEXT_PUBLIC_GITHUB_ORG_NAME ?? '',
    },
    {
      icon: <FigmaIcon {...ICON_PROPS} />,
      switchData: process.env.NEXT_PUBLIC_INVITE_FIGMA_URL ?? '',
    },
    {
      icon: <DiscordIcon {...ICON_PROPS} />,
      switchData: process.env.NEXT_PUBLIC_INVITE_DISCORD_URL ?? '',
    },
    {
      icon: <TelegramIcon {...ICON_PROPS} />,
      switchData: process.env.NEXT_PUBLIC_INVITE_TELEGRAM ?? '',
    },
  ]

  return SWITCH_DATA_LIST
}
