import { ThemeType } from '@ui/theme'

export const getInviteButtonConstants = (theme: ThemeType) => {
  return {
    SUCCESS_COLOR: theme.colors.BLUE_400,
    ICON_SIZE: theme.spaces.semiRegular,
  }
}
