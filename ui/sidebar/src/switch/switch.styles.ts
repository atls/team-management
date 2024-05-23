import { CSSObject } from '@emotion/css'

import { theme }     from '@ui/theme'

export const baseSwitchStyles: CSSObject = {
  height: theme.space.mediumReduced,
  width: theme.space.mediumReduced,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  zIndex: '9999',
  boxShadow: theme.shadows.moorena,
  borderRadius: theme.radii.micro,
  backgroundColor: theme.backgrounds.white,
}
