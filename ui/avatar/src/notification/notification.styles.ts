import { CSSObject } from '@emotion/css'

import { theme }     from '@ui/theme'

export const baseStyles: CSSObject = {
  position: 'absolute',
  zIndex: '1',
  top: '0',
  left: '0',
  width: theme.space.notification,
  height: theme.space.notification,
  borderRadius: theme.radii.f12,
  backgroundColor: theme.backgrounds.notification,
}
