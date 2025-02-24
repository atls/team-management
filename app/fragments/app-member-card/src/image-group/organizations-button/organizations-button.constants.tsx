import type { ThemeType } from '@ui/theme'

export const getConstants = (theme: ThemeType) => {
  const ICON_PROPS = {
    width: theme.spaces.medium,
    height: theme.spaces.medium,
    color: theme.colors.white,
  }

  return {
    ICON_PROPS,
  }
}
