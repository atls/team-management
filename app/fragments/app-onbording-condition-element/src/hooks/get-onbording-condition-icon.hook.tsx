import type { GetOnbordingConditionIconType } from './get-onbording-condition-icon.interfaces.js'

import React                                  from 'react'

import { CONDITION_ICON_NAMES }               from '@globals/constants'
import { GitHubIcon }                         from '@ui/icons'
import { TelegramIcon }                       from '@ui/icons'
import { FigmaIcon }                          from '@ui/icons'
import { DiscordIcon }                        from '@ui/icons'
import { TeamIcon }                           from '@ui/icons'

export const getOnbordingConditionIcon: GetOnbordingConditionIconType = ({
  theme,
  conditionIconName,
  conditionName,
}) => {
  const { githubIconName, discordIconName, figmaIconName, telegramIconName } = CONDITION_ICON_NAMES

  const ICON_PROPS = { with: theme.spaces.semiMedium, height: theme.spaces.semiMedium }

  let conditionIcon: JSX.Element
  if (conditionIconName === githubIconName) {
    conditionIcon = <GitHubIcon {...ICON_PROPS} />
  } else if (conditionIconName === discordIconName) {
    conditionIcon = <DiscordIcon {...ICON_PROPS} />
  } else if (conditionIconName === figmaIconName) {
    conditionIcon = <FigmaIcon {...ICON_PROPS} />
  } else if (conditionIconName === telegramIconName) {
    conditionIcon = <TelegramIcon {...ICON_PROPS} />
  } else {
    // eslint-disable-next-line no-console
    console.log(`for onbordingCondition ${conditionName} icon not selected, used default`)
    conditionIcon = <TeamIcon {...ICON_PROPS} />
  }

  return conditionIcon
}