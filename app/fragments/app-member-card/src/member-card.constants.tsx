import type { GetOnbordingConditionListType } from './member-card.interfaces.js'

import React                                  from 'react'

import { GitHubIcon }                         from '@ui/icons'
import { TelegramIcon }                       from '@ui/icons'
import { FigmaIcon }                          from '@ui/icons'
import { DiscordIcon }                        from '@ui/icons'
import { ThemeType }                          from '@ui/theme'

export const getOnbordingConditionList: GetOnbordingConditionListType = ({
  theme,
}: {
  theme: ThemeType
}) => {
  const ICON_PROPS = { with: theme.spaces.semiMedium, height: theme.spaces.semiMedium }

  const onbordingConditionList = [
    {
      conditionName: 'atlsMainOrganization',
      conditionIcon: <GitHubIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'atlsFigmaTeam',
      conditionIcon: <FigmaIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'atlsTelegramGroup',
      conditionIcon: <TelegramIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'atlsDiscordGroup',
      conditionIcon: <DiscordIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'github2fa',
      conditionIcon: <GitHubIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'github2gpg',
      conditionIcon: <GitHubIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'githubAvatar',
      conditionIcon: <GitHubIcon {...ICON_PROPS} />,
    },
  ]

  return onbordingConditionList
}
