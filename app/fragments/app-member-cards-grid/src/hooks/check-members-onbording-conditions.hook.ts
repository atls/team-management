import { CONDITION_ICON_NAMES }      from '@globals/constants'

import { checkGithubDefaultAvatar }  from './check-github-default-avatar.hook.js'
import { getDiscordServerMembers }   from './get-discord-server-members.hook.js'
import { getFigmaTeamCollaborators } from './get-figma-collaborators.hook.js'
import { getTelegramChannelMembers } from './get-telegram-channel-members.hook.js'

export const checkMembersOnbordingConditions = async ({ membersData, organizationsData }) => {
  // TODO move telegram discord, figma to globals services-data
  // const telegramMembers = []
  // const figmaMembers = []
  // const discordMembers = []

  const { githubIconName, discordIconName, figmaIconName, telegramIconName } = CONDITION_ICON_NAMES

  const discordServerMembers = await getDiscordServerMembers()
  console.log(discordServerMembers)

  const figmaTeamId = '1180582603387288055'
  const figmaCollaborators = await getFigmaTeamCollaborators(figmaTeamId)
  console.log(figmaCollaborators)

  // const telegramChannelMembers = await getTelegramChannelMembers()

  const resultMembersData = await membersData.map((memberData) => {
    // console.log(memberData)
    const { avatarUrl } = memberData

    // const isGithubAvatarGenerated = await checkGithubDefaultAvatar(avatarUrl)

    const memberWithOnbordingData = memberData

    memberWithOnbordingData.onbordingData = [
      {
        // TODO сверка из списка организаций с организацией из env
        // ты у тебя уже есть данные кто в какой организации
        conditionName: 'atlsMainOrganization',
        conditionState: true,
        conditionDisplayName: 'Organization',
        conditionIconName: githubIconName,
      },
      {
        // TODO делать запрос на фигму, собирать массив {email, username?}
        // из ВСЕХ участников команды
        conditionName: 'atlsFigmaTeam',
        conditionState: true,
        conditionDisplayName: 'Figma',
        conditionIconName: figmaIconName,
      },
      {
        // TODO пробой без библиотеки, чисто телеграм АПИ
        conditionName: 'atlsTelegramGroup',
        conditionState: true,
        conditionDisplayName: 'Telegram',
        conditionIconName: telegramIconName,
      },
      {
        // TODO смотреть доки
        conditionName: 'atlsDiscordGroup',
        conditionState: true,
        conditionDisplayName: 'Discord',
        conditionIconName: discordIconName,
      },
      {
        // TODO смотреть доки
        // добавлять в первичный запрос эту информацию
        conditionName: 'github2fa',
        conditionState: false,
        conditionDisplayName: '2FA',
        conditionIconName: githubIconName,
      },
      {
        // TODO смотреть доки
        // добавлять в первичный запрос эту информацию
        conditionName: 'github2gpg',
        conditionState: true,
        conditionDisplayName: 'GPG',
        conditionIconName: githubIconName,
      },
      {
        // TODO смотреть доки
        // добавлять в первичный запрос эту информацию
        // ссылки на аватар недостаточно. ГХ подставляет свои аватары,
        // если юсер не ставит
        conditionName: 'githubAvatar',
        conditionState: false,
        conditionDisplayName: 'Avatar',
        conditionIconName: githubIconName,
      },
    ]

    return memberWithOnbordingData
  })

  return await resultMembersData
}
