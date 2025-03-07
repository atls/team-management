import type { ThemeType }          from '@ui/theme'

import type { GetConstantsOutput } from './organization-element.interfaces.js'

export const getConstats = (theme: ThemeType): GetConstantsOutput => {
  const ICON_PROPS = {
    width: theme.spaces.semiRegular,
    height: theme.spaces.semiRegular,
    color: theme.colors.RED_400,
  }
  return { ICON_PROPS }
}
