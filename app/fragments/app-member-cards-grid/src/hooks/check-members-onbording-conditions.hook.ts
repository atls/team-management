import { getDiscordServerMembers } from '@globals/third-party-service-data'

import { CONDITION_ICON_NAMES }    from '@globals/constants'

export const checkMembersOnbordingConditions = async ({ membersData, organizationsData }) => {
  const { githubIconName, discordIconName, figmaIconName, telegramIconName } = CONDITION_ICON_NAMES

  const discordServerMembers = await getDiscordServerMembers()
  console.log(discordServerMembers)

  const resultMembersData = await membersData.map((memberData) => {
    // console.log(memberData)
    const { avatarUrl } = memberData

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
