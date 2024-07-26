import React            from 'react'
import { Theme }        from 'styled-system'

import { GitHubIcon }   from '@ui/icons'
import { TelegramIcon } from '@ui/icons'
import { FigmaIcon }    from '@ui/icons'
import { DiscordIcon }  from '@ui/icons'
import { ThemeType }    from '@ui/theme'

export const getOnbordingConditionList = ({ theme }: { theme: ThemeType }) => {
  const ICON_PROPS = { with: theme.spaces.semiMedium, height: theme.spaces.semiMedium }

  const onbordingConditionList = [
    {
      conditionName: 'atlsMainOrganization',
      conditionDisplayName: 'Organization',
      conditionIcon: <GitHubIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'atlsFigmaTeam',
      conditionDisplayName: 'Figma',
      conditionIcon: <FigmaIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'atlsTelegramGroup',
      conditionDisplayName: 'Telegram',
      conditionIcon: <TelegramIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'atlsDiscordGroup',
      conditionDisplayName: 'Discord',
      conditionIcon: <DiscordIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'github2fa',
      conditionDisplayName: '2FA',
      conditionIcon: <GitHubIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'github2gpg',
      conditionDisplayName: 'GPG',
      conditionIcon: <GitHubIcon {...ICON_PROPS} />,
    },
    {
      conditionName: 'githubAvatar',
      conditionDisplayName: 'Avatar',
      conditionIcon: <GitHubIcon {...ICON_PROPS} />,
    },
  ]

  return onbordingConditionList
}
