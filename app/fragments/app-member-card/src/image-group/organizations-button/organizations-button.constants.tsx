import type { ThemeType }          from '@ui/theme'

import type { GetConstantsOutput } from './organizations-button.interfaces.js'

export const getConstants = (theme: ThemeType): GetConstantsOutput => {
  const ICON_PROPS = {
    width: theme.spaces.medium,
    height: theme.spaces.medium,
    color: theme.colors.white,
  }

  return {
    ICON_PROPS,
  }
}
