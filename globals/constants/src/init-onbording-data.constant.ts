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
    // TODO нет данных collaborators по предложенному ендпоинту
    conditionName: 'atlsFigmaTeam',
    conditionState: false,
    conditionDisplayName: 'Figma',
    conditionIconName: figmaIconName,
  },
  {
    // TODO для запроса мембера из телеграм-группы нужен user_id
    // имея username, получить его мы не можем без взаимодействия с ботом
    conditionName: 'atlsTelegramGroup',
    conditionState: false,
    conditionDisplayName: 'Telegram',
    conditionIconName: telegramIconName,
  },
  {
    // TODO в процессе. ошибка пакета
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
    // TODO уточнить информацию, кактоможно сделать
    conditionName: 'github2gpg',
    conditionState: false,
    conditionDisplayName: 'GPG',
    conditionIconName: githubIconName,
  },
  {
    // TODO если добавить к url аватара querParam s,
    // то у генерируемого аватара не будет меняться размер
    // у пользовательского, персонального аватара изменится размер
    conditionName: 'githubAvatar',
    conditionState: false,
    conditionDisplayName: 'Avatar',
    conditionIconName: githubIconName,
  },
]
