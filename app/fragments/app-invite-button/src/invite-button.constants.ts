import type { ThemeType }          from '@ui/theme'

import type { InviteButtonOutput } from './invite-button.interfaces.js'

export const getInviteButtonConstants = (theme: ThemeType): InviteButtonOutput => ({
  SUCCESS_COLOR: theme.colors.BLUE_400,
  ICON_SIZE: theme.spaces.semiRegular,
})
