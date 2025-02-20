import { CSSObject } from '@emotion/react'
import { theme }     from '@ui/theme'

export const baseStyles: CSSObject = {
  position: 'absolute',
  zIndex: '1',
  top: theme.spaces.zero,
  left: theme.spaces.zero,
  width: theme.spaces.miniIncreased,
  height: theme.spaces.miniIncreased,
  borderRadius: theme.radii.medium,
  backgroundColor: theme.backgrounds.darkSkyBlue,
}
