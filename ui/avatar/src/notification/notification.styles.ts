import { CSSObject } from '@emotion/css'

import { theme }     from '@ui/theme'

export const baseStyles: CSSObject = {
  position: 'absolute',
  zIndex: '1',
  top: '0',
  left: '0',
  width: theme.space.miniIncreased,
  height: theme.space.miniIncreased,
  borderRadius: theme.radii.medium,
  backgroundColor: theme.backgrounds.darkSkyBlue,
}