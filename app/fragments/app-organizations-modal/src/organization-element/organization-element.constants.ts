import type { ThemeType } from '@ui/theme'

export const getConstats = (theme: ThemeType) => {
  const ICON_PROPS = {
    width: theme.spaces.semiRegular,
    height: theme.spaces.semiRegular,
    color: theme.colors.RED_400,
  }
  return { ICON_PROPS }
}
