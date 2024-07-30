import { CONDITION_ICON_NAMES } from '@globals/constants'

const { githubIconName, discordIconName, figmaIconName, telegramIconName } = CONDITION_ICON_NAMES

export const INIT_ONBORDING_DATA = [
  {
    // done
    conditionName: 'atlsMainOrganization',
    conditionState: false,
    conditionDisplayName: 'Organization',
    conditionIconName: githubIconName,
  },
  {
    // нет данных collaborators по предложенному ендпоинту
    conditionName: 'atlsFigmaTeam',
    conditionState: false,
    conditionDisplayName: 'Figma',
    conditionIconName: figmaIconName,
  },
  {
    // для запроса мембера из телеграм-группы нужен user_id
    // имея username, получить его мы не можем без взаимодействия с ботом
    conditionName: 'atlsTelegramGroup',
    conditionState: false,
    conditionDisplayName: 'Telegram',
    conditionIconName: telegramIconName,
  },
  {
    // в процессе. ошибка пакета
    conditionName: 'atlsDiscordGroup',
    conditionState: false,
    conditionDisplayName: 'Discord',
    conditionIconName: discordIconName,
  },
  {
    // в issue есть док
    conditionName: 'github2fa',
    conditionState: false,
    conditionDisplayName: '2FA',
    conditionIconName: githubIconName,
  },
  {
    // уточнить информацию, кактоможно сделать
    conditionName: 'github2gpg',
    conditionState: false,
    conditionDisplayName: 'GPG',
    conditionIconName: githubIconName,
  },
  {
    // если добавить к url аватара querParam s,
    // то у генерируемого аватара не будет меняться размер
    // у пользовательского, персонального аватара изменится размер
    conditionName: 'githubAvatar',
    conditionState: false,
    conditionDisplayName: 'Avatar',
    conditionIconName: githubIconName,
  },
]
