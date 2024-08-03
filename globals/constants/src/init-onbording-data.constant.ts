import { CONDITION_ICON_NAMES } from './onbording-condition-icon-names.constant.js'

const { githubIconName, discordIconName, figmaIconName, telegramIconName } = CONDITION_ICON_NAMES

export const INIT_ONBORDING_DATA = [
  {
    conditionName: 'atlsMainOrganization',
    conditionState: false,
    conditionDisplayName: 'Organization',
    conditionIconName: githubIconName,
  },
  {
    // TODO cant get collaborators data by figma rest api endpoint
    conditionName: 'atlsFigmaTeam',
    conditionState: false,
    conditionDisplayName: 'Figma',
    conditionIconName: figmaIconName,
  },
  {
    // TODO cant check group membership without telegram-user-id
    conditionName: 'atlsTelegramGroup',
    conditionState: false,
    conditionDisplayName: 'Telegram',
    conditionIconName: telegramIconName,
  },
  {
    // TODO discord.js package error
    conditionName: 'atlsDiscordGroup',
    conditionState: false,
    conditionDisplayName: 'Discord',
    conditionIconName: discordIconName,
  },
  {
    conditionName: 'github2fa',
    conditionState: true,
    conditionDisplayName: '2FA',
    conditionIconName: githubIconName,
  },
  {
    // TODO
    conditionName: 'github2gpg',
    conditionState: false,
    conditionDisplayName: 'GPG',
    conditionIconName: githubIconName,
  },
  {
    // TODO needs to check generated avatar and user-uploaded
    // generated avatar dont resizes on s=size url searchParam
    conditionName: 'githubAvatar',
    conditionState: false,
    conditionDisplayName: 'Avatar',
    conditionIconName: githubIconName,
  },
]
